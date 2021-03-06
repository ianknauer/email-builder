# VGH & UBC Hospital Foundation

## Current Templates

Template | Current Screenshots
------------ | -------------
E-News Template | https://litmus.com/pub/29a6192
E-Appeal Template | https://litmus.com/pub/43c03d6
Invitation Template | https://litmus.com/pub/9287ce0

## Installation

To use this template, your computer needs [Node.js](https://nodejs.org/en/) 0.12 or greater. The template can be installed with the Foundation CLI, or downloaded and set up manually.

### Using the CLI

Install the Foundation CLI with this command: (use sudo before npm if you're running into permission errors)

```bash
npm install foundation-cli --global
```

### Getting up and running

```bash
git clone git@github.com:VGHUBCHospitalFoundation/Luminate-Email-Templates.git
cd Luminate-Email-Templates
npm install
```

### Website for documentation

https://vghubchospitalfoundation.github.io/Luminate-Email-Templates/

## Build Commands

Run `npm start` to kick off the build process. A new browser tab will open with a server pointing to your project files, this is what you want to be using to build the templates out.

Run `npm run build` to inline your CSS into your HTML along with the rest of the build process before you want to use it for the documentation.

Run `npm run build-docs` to build up the documentation page.

When you're happy with how the documentation looks commit it to github and the updates will be reflected on the documentation page!
