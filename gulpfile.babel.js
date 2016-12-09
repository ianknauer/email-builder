import gulp           from 'gulp';
import plugins        from 'gulp-load-plugins';
import browser        from 'browser-sync';
import rimraf         from 'rimraf';
import panini         from 'panini';
import yargs          from 'yargs';
import lazypipe       from 'lazypipe';
import inky           from 'inky';
import fs             from 'fs';
import siphon         from 'siphon-media-query';
import path           from 'path';
import merge          from 'merge-stream';
import beep           from 'beepbeep';
import colors         from 'colors';
import sequence       from 'run-sequence';
import supercollider  from 'supercollider';
import octophant      from 'octophant';
import foundationDocs from 'foundation-docs';

const $ = plugins();

// Look for the --production flag
const PRODUCTION = !!(yargs.argv.production);
const EMAIL = yargs.argv.to;

// Declar var so that both AWS and Litmus task can use it.
var CONFIG;

// Build the "dist" folder by running all of the above tasks
gulp.task('build',
  gulp.series(clean, pages, sass, images, inline));

// Build emails, run the server, and watch for file changes
gulp.task('default',
  gulp.series('build', server, watch));

// Build emails, then send to litmus
gulp.task('litmus',
  gulp.series('build', creds, aws, litmus));

// Build emails, then send to litmus
gulp.task('mail',
  gulp.series('build', creds, aws, mail));

gulp.task('docsSass',
  gulp.series(sassDocs, sassFoundation));

gulp.task('build-docs',
  gulp.series(cleanDocs, copyDocs, docsHTML, 'docsSass', docsJavascript));

  gulp.task('email-docs',
    gulp.series('build-docs', docsServer, docWatch));

// Delete the "dist" folder
// This happens every time a build starts
function clean(done) {
  rimraf('dist', done);
}

function cleanDocs(done) {
  rimraf('docs', done);
}

// Compile layouts, pages, and partials into flat HTML files
// Then parse using Inky templates
function pages() {
  return gulp.src('src/pages/**/*.html')
    .pipe(panini({
      root: 'src/pages',
      layouts: 'src/layouts',
      partials: 'src/partials',
      helpers: 'src/helpers'
    }))
    .pipe(inky())
    .pipe(gulp.dest('dist'));
}

// Reset Panini's cache of layouts and partials
function resetPages(done) {
  panini.refresh();
  done();
}

// Compile Sass into CSS
function sass() {
  return gulp.src('src/assets/scss/app.scss')
    .pipe($.if(!PRODUCTION, $.sourcemaps.init()))
    .pipe($.sass({
      includePaths: ['node_modules/foundation-emails/scss']
    }).on('error', $.sass.logError))
    .pipe($.if(PRODUCTION, $.uncss(
      {
        html: ['dist/**/*.html']
      })))
    .pipe($.if(!PRODUCTION, $.sourcemaps.write()))
    .pipe(gulp.dest('dist/css'));
}

// Copy and compress images
function images() {
  return gulp.src('src/assets/img/**/*')
    .pipe($.imagemin())
    .pipe(gulp.dest('./dist/assets/img'));
}

// Inline CSS and minify HTML
function inline() {
  return gulp.src('dist/**/*.html')
    .pipe($.if(PRODUCTION, inliner('dist/css/app.css')))
    .pipe(gulp.dest('dist'));
}

// Start a server with LiveReload to preview the site in
function server(done) {
  browser.init({
    server: 'dist'
  });
  done();
}

// Watch for file changes
function watch() {
  gulp.watch('src/pages/**/*.html').on('all', gulp.series(pages, inline, browser.reload));
  gulp.watch(['src/layouts/**/*', 'src/partials/**/*']).on('all', gulp.series(resetPages, pages, inline, browser.reload));
  gulp.watch(['../scss/**/*.scss', 'src/assets/scss/**/*.scss']).on('all', gulp.series(resetPages, sass, pages, inline, browser.reload));
  gulp.watch('src/assets/img/**/*').on('all', gulp.series(images, browser.reload));
}

// Inlines CSS into HTML, adds media query CSS into the <style> tag of the email, and compresses the HTML
function inliner(css) {
  var css = fs.readFileSync(css).toString();
  var mqCss = siphon(css);

  var pipe = lazypipe()
    .pipe($.inlineCss, {
      applyStyleTags: false,
      removeStyleTags: true,
      preserveMediaQueries: true,
      removeLinkTags: false
    })
    .pipe($.replace, '<!-- <style> -->', `<style>${mqCss}</style>`)
    .pipe($.replace, '<link rel="stylesheet" type="text/css" href="css/app.css">', '')
    .pipe($.htmlmin, {
      collapseWhitespace: true,
      minifyCSS: true
    });

  return pipe();
}

// Ensure creds for Litmus are at least there.
function creds(done) {
  var configPath = './config.json';
  try { CONFIG = JSON.parse(fs.readFileSync(configPath)); }
  catch(e) {
    beep();
    console.log('[AWS]'.bold.red + ' Sorry, there was an issue locating your config.json. Please see README.md');
    process.exit();
  }
  done();
}

// Post images to AWS S3 so they are accessible to Litmus and manual test
function aws() {
  var publisher = !!CONFIG.aws ? $.awspublish.create(CONFIG.aws) : $.awspublish.create();
  var headers = {
    'Cache-Control': 'max-age=315360000, no-transform, public'
  };

  return gulp.src('./dist/assets/img/*')
    // publisher will add Content-Length, Content-Type and headers specified above
    // If not specified it will set x-amz-acl to public-read by default
    .pipe(publisher.publish(headers))

    // create a cache file to speed up consecutive uploads
    //.pipe(publisher.cache())

    // print upload updates to console
    .pipe($.awspublish.reporter());
}

// Send email to Litmus for testing. If no AWS creds then do not replace img urls.
function litmus() {
  var awsURL = !!CONFIG && !!CONFIG.aws && !!CONFIG.aws.url ? CONFIG.aws.url : false;

  return gulp.src('dist/**/*.html')
    .pipe($.if(!!awsURL, $.replace(/=('|")(\/?assets\/img)/g, "=$1"+ awsURL)))
    .pipe($.litmus(CONFIG.litmus))
    .pipe(gulp.dest('dist'));
}

// Send email to specified email for testing. If no AWS creds then do not replace img urls.
function mail() {
  var awsURL = !!CONFIG && !!CONFIG.aws && !!CONFIG.aws.url ? CONFIG.aws.url : false;

  if (EMAIL) {
    CONFIG.mail.to = [EMAIL];
  }

  return gulp.src('dist/**/*.html')
    .pipe($.if(!!awsURL, $.replace(/=('|")(\/?assets\/img)/g, "=$1"+ awsURL)))
    .pipe($.mail(CONFIG.mail))
    .pipe(gulp.dest('dist'));
}


supercollider
  .config({
    template: foundationDocs.componentTemplate,
    marked: foundationDocs.marked,
    handlebars: foundationDocs.handlebars,
    keepFm: true,
    quiet: false,
    pageRoot: '_docs/pages',
    data: {
      repoName: 'foundation-emails',
      editBranch: 'develop'
    }
  })
  .searchConfig({
    sort: ['page', 'component', 'sass variable', 'sass mixin', 'sass function', 'js class', 'js function', 'js plugin option', 'js event'],
    pageTypes: {
      library: function(item) {
        return !!(item.library);
      }
    }
  })
  .adapter('sass')
  .adapter('js');

  function docsServer(done) {
    browser.init({
      server: 'docs'
    });
    done();
  }

function copyDocs() {
    return gulp.src(['_docs/assets/**/*', '!_docs/assets/scss/**/*', '!_docs/assets/js/**/*'])
      .pipe(gulp.dest('docs/assets'));
}

function docsHTML() {
    return gulp.src('_docs/pages/**/*')
      .pipe($.cached('_docs'))
      .pipe(supercollider.init())
      .pipe(panini({
        root: '_docs/pages/',
        layouts: '_docs/layouts/',
        partials: '_docs/partials/',
        helpers: foundationDocs.handlebarsHelpers
      }))
      .pipe(gulp.dest('docs'))
      .on('finish', function() {
        supercollider.buildSearch('docs/data/search.json', function() {});
      });
  }

 function sassDocs() {
    return gulp.src('_docs/assets/scss/docs.scss')
      .pipe($.sass({ includePaths: [process.cwd()] }).on('error', $.sass.logError))
      .pipe($.autoprefixer({
        browsers: ['last 2 versions', 'ie >= 9']
      }))
      .pipe(gulp.dest('docs/assets/css'));
  }

  // Compiles Foundation-specific CSS
function sassFoundation() {
    return gulp.src('scss/foundation-emails.scss')
      .pipe($.sass().on('error', $.sass.logError))
      .pipe(gulp.dest('docs/assets/css'));
}

function docsJavascript() {
  return gulp.src(['node_modules/foundation-docs/js/*.js', '_docs/assets/js/**/*.js'])
    .pipe($.concat('docs.js'))
    .pipe(gulp.dest('docs/assets/js'));
}

function docWatch() {
  gulp.watch('_docs/**/*').on('all', gulp.series(docsHTML, browser.reload));
  gulp.watch(['_docs/assets/scss/**/*', 'node_modules/foundation-docs/scss/**/*']).on('all', gulp.series(sassDocs, browser.reload));
  gulp.watch('scss/**/*.scss').on('all', gulp.series(sassFoundation, browser.reload));
}

function watch() {
  gulp.watch('src/pages/**/*.html').on('all', gulp.series(pages, inline, browser.reload));
  gulp.watch(['src/layouts/**/*', 'src/partials/**/*']).on('all', gulp.series(resetPages, pages, inline, browser.reload));
  gulp.watch(['../scss/**/*.scss', 'src/assets/scss/**/*.scss']).on('all', gulp.series(resetPages, sass, pages, inline, browser.reload));
  gulp.watch('src/assets/img/**/*').on('all', gulp.series(images, browser.reload));
}
