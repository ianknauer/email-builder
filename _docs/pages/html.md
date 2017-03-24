---
title: HTML
description: The basics of what you need to know about HTML for building emails.
---
<strong>Tags:</strong> These are the building blocks of HTML. They live inside brackets and are almost always in opening/closing pairings.<br><br>
<strong>Attributes:</strong> These belong to tags. Some are universal across all tags, some are shared across different tags, and some are unique to particular tags.

## Elements that we use

`<table></table>`

Outside wrapper for the table, used for structure.<br>
See: https://www.w3schools.com/tags/tag_table.asp

<strong>attributes that we use:</strong>
<ul>
<li><strong>border:</strong> Width of the border we want around the box. Usually set to 0 to hide it.</li>
<li><strong>cellspacing:</strong> Spacing between different cells.</li>
<li><strong>cellpadding:</strong> Spacing between cell walls and the things inside of it.</li>
<li><strong>width:</strong> Sets width of the table.</li>
<li><strong>style</strong></li>
<li><strong>class</strong></li>
</ul>

`<tr></tr>`

These are rows within the table element, once again used for structure. <br>
See: https://www.w3schools.com/tags/tag_tr.asp

<strong>attributes that we use:</strong><br><br>
<strong>none!</strong>

`<td></td>`

Similar to a cell in Excel, these are the blocks used inside of rows. <br>
See: https://www.w3schools.com/tags/tag_td.asp.

<strong>attributes that we use:</strong>
<ul>
<li><strong>valign:</strong> vertical alignment similar to align.</li>
<li><strong>height:</strong> used to set a minimum height on elements. Typically used to provide padding around things.</li>
<li><strong>align:</strong> similar to text align in word, aligns content in a cell.</li>
<li><strong>width:</strong> How wide element should be. Defaults to pixel value.</li>
<li><strong>style</strong></li>
<li><strong>class</strong></li>
</ul>

`<a></a>`

This is an anchor tag. 99% of the time you use it for links.
<br> See: https://www.w3schools.com/tags/tag_a.asp

<strong>attributes that we use:</strong>
<ul>
<li><strong>href:</strong> This is where you put the link you want to send people off to.</li>
<li><strong>target:</strong> use _blank if you want the link to open up in a new window/tab.</li>
<li><strong>style</strong></li>
<li><strong>class</strong></li>
</ul>

`<img />`

This is the image tag. Notice it doesn't have pair with a closing tag as nothing goes "inside" the block. You can include the blackslash at the end or not. See: https://www.w3schools.com/tags/tag_img.asp

<strong>attributes we use:</strong>
<ul>
<li><strong>src:</strong> link for where the image lives.</li>
<li><strong>alt:</strong> this is the text that shows up if the image isn't downloaded. It's meant to describe what's in the image.</li>
<li><strong>width:</strong> Width of the image. Please crop the image to the same size you want it to show up otherwise you can run into rendering issues.</li>
<li><strong>style</strong></li>
<li><strong>class</strong></li>
</ul>

`<!-- Comment -->`

This is an HTML Comment that the html rendering engine ignores. People can still read them if they go into the code. See: https://www.w3schools.com/tags/tag_comment.asp

<strong>No attributes supported</strong>.

`<p></p>`

Paragraph Tag. This is where the text goes. See: https://www.w3schools.com/tags/tag_p.asp

<strong>attributes that we use:</strong>
<ul>
<li><strong>style</strong></li>
<li><strong>class</strong></li>
</ul>

`<br>`

Break tag. It's like the enter key on your keyboard. Use it twice to get a space between paragraphs in your text block! See: https://www.w3schools.com/tags/tag_br.asp

<strong>No attributes supported</strong>.

`<span></span>`

Span tag. This is a way to introduce formatting to a chunk of text that doesn't have a predefined use (not a link, etc). See: https://www.w3schools.com/tags/tag_span.asp

<strong>Attributes that we use:</strong>
<ul>
<li>style</li>
<li>class</li>
</ul>

#### Universal Attributes

<strong>Style:</strong> This is referred to as inline CSS, which overwrites anything that is defined before it in the style cascade. This is necessary because not all email clients support Stylesheets or style definitions in the header, and is one of the painful legacy bits left in email design.<br><br>
<strong>Class:</strong> These are styles defined in groups in CSS that can be applied to multiple tags.

## Basic Visual Example

Here is our pomegranate, because we're all about fancy fruit.

`<p id="ians-favourite-pomegranate" class="generic-fruit-traits" style="border-color: red; color: white">This is the white filling <span style="color: red">This is a seed</span>, this is more white filling and <span style="color: red; font-weight: 700; font-size: 25px;">These are larger red seeds</span>.</p>`

Here we've got Ian's pomegrante. The fruit inherits some visual traits from being a fruit but also has some specific attributes to itself. Note that the pomegrante has to be closed or the seeds and filling will fall out.

Attributes on the pomegranate:

<strong>Id:</strong> Unique identifier for this particular element, I can only choose one favourite fruit.<br>
<strong>class:</strong> visual definitions that are brought in to the fruit from outside of it. Has to be defined somewhere.<br>
<strong>style:</strong> style for this particular element, could also be stored in a class. Ex. we could make a Pomegranate class that had these two definitions and then add it to the classes.<br>

## Layout Example

![alt text](assets/img/table-design.png "Code for html layout example")

![alt text](assets/img/word-table.png "Word Table")

Think of this as a table as you'd put it into Word! We have a table that's 550 pixels wide with three rows. The first row has two blocks that are both 25 pixels high. This is to give some spacing above the images so the text doesn't get too close. The second row has two cells, each with an image inside of it. The third row has two more elements that are 25 pixels high to give space below the element as well.
