---
title: Call to Action
description: Banner/Button to get people to do things we want.
---

## Donate Now Button

Change the link under `<!-- Call to action link-->` and the image source and alt text under `<!-- Call to action image -->`. The image should be uploaded to Luminate, the alt tag should describe what is in the image (use the call to action text here). The Alt tag is used by screen readers for the visually impaired and is what shows up in email clients when you have images turned off.

```bordered
<tr>
  <td valign="top" align="center" style="text-align:center">
    <table border="0" cellspacing="0" cellpadding="0" width="100%" align="center">
      <tr>
        <td style="text-align:center" align="center">
          <!-- Call to action link -->
          <a href="https://secure.e2rm.com/registrant/donate.aspx?EventID&#x3D;85373" style="display:block;margin:0 auto">
            <!-- Call to action image -->
            <img border="0" style="display:block;margin:0 auto" src="http://support.vghfoundation.ca/custom/df_2016/images/vgh-enews-footer-donate.jpg" alt="Donate now!">
          </a>
        </td>
      </tr>
    </table>
  </td>
</tr>
```

## RSVP More Info

You can change the background colour using the style on the `<td>` tag. Use one of the brand colours if you're going to deviate from what's here. You can change what's highlighted by moving the `<span style="color:#84c447">` to the beginning of where you want to highlight and the `</span>` to the end.

```bordered
<tr>
  <td valign="top" style="background-color:#373737;color:#fff;font-family:Arial,Helvetica,sans-serif;padding:10px 30px;text-align:center;font-size:15px;line-height:1.5">
    <!-- RSVP information -->
    <p>Please RSVP for you and your guest by <span style="color:#84c447">Thursday, September 1st</span><br>or call 604 875 5164.</p>
  </td>
</tr>
```
