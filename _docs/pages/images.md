---
title: Images
description: This is the code for various ways of adding an image into the body of an email.
---

## Single Hero Image

Change the image source at `<!-- update image here -->` to one that you upload to Luminate. The image is <strong>550px</strong> wide. The image height in the demo below is <strong>375px</strong>. This is a good starting point, but height is flexible if we'd rather have a shorter/taller image.

```wrapped
<tr>
  <td valign="top">
    <!-- update image here -->
    <img border="0" style="display:block" src="http://support.vghfoundation.ca/custom/emails/eappeal-header.jpg" alt="">
  </td>
</tr>
```

## Hero Image with Sub-Images

The images in this feature are meant to be links off to articles on our site so each one is a link. To change the links/images for the images find the `<!-- edit number link here -->` and  `<!-- edit number image here -->` corresponding to each image. The main image is <strong>375px</strong> wide and the secondary images are <strong>260px</strong> wide and tall.

```wrapped

  <table border="0" cellspacing="0" cellpadding="0" width="550px" bgcolor="#ffffff">
    <tbody>
      <tr>
        <td width="100%" height="329" valign="top">
          <!-- Edit first link here --> <a href="#" target="_blank">
            <!-- Edit first image here --> <img src="https://secure.vghfoundation.ca/custom/df_2016/images/vgh-enews-content-article1.jpg" alt="Freestyle skier makes miraculous recovery brain injury. Learn more!" width="100%" border="0" style="display:block">
          </a>
        </td>
      </tr>
      <tr>
        <td height="5" valign="top">&nbsp;</td>
      </tr>
      <tr>
        <td valign="top">
          <table width="100%" border="0" cellspacing="0" cellpadding="0">
            <tr>
              <td width="10" valign="top">&nbsp;</td>
              <td width="260" valign="top">
              <!-- Edit second link here --><a href="#" target="_blank">
                <!-- Edit second image here --><img src="https://secure.vghfoundation.ca/custom/df_2016/images/vgh-enews-content-article2.jpg" alt="When doctors become donors. Learn more!" width="260" border="0">
              </a>
              </td>
              <td width="10" valign="top">&nbsp;</td>
              <td width="260" valign="top">
                <!-- edit third Link here --> <a href="#" target="_blank">
                  <!-- Edit second image here --> <img src="https://secure.vghfoundation.ca/custom/df_2016/images/vgh-enews-content-article3.jpg" alt="Lifesaving spinal surgery inspires donation to research. Learn more!" width="260" border="0">
                </a>
              </td>
              <td width="10" valign="top">&nbsp;</td>
            </tr>
          </table>
        </td>
      </tr>
    </tbody>
  </table>

```
