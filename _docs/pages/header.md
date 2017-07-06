---
title: Header
description: Here's the header for all of our Emails. You can use two different varieties of it, either with or without the Donate button.
---

## With Donate Button

Make sure you point the donation button to an actual donation form where it says `<!-- change link here -->`. You can change the button image at `<!-- change button here -->` to one with different text or colours depending on the campaign. If you update the button text make sure you also update the alt tag.

```bordered
    <tr><td valign="top"><table border="0" cellspacing="0" cellpadding="0" width="100%"><tr><td height="88" valign="top"><table border="0" cellspacing="0" cellpadding="0" width="100%"><tr><td width="141" height="88" valign="top"><a href="http://vghfoundation.ca/" target="_blank"><img style="display:block" src="http://support.vghfoundation.ca/custom/df_2016/images/vgh-enews-header-logo.jpg" border="0" alt="Vancouver General Hospital Foundation Logo"></a></td><td width="200" valign="top">&nbsp;</td><td width="196" valign="top"><table border="0" cellspacing="0" cellpadding="0" width="196"><tr><td height="25">&nbsp;</td></tr><tr><td height="38" valign="top"><a href="#" target="_blank"><img style="display:block" src="http://support.vghfoundation.ca/custom/df_2016/images/vgh-enews-header-donate.jpg" border="0" alt="Donate Now"></a></td></tr><tr><td height="25" valign="top">&nbsp;</td></tr></table></td></tr></table></td></tr></table></td></tr>
```

## Without Donate Button

This is the exact same code as the with donate button, but we've removed the link and donation image. Use this is you're creating an email that's meant for internal use (update board members on something for example).

```bordered
<tr><td valign="top"><table border="0" cellspacing="0" cellpadding="0" width="100%"><tr><td height="88" valign="top"><table border="0" cellspacing="0" cellpadding="0" width="100%"><tr><td width="141" height="88" valign="top"><a href="http://vghfoundation.ca/" target="_blank"><img style="display:block" src="http://support.vghfoundation.ca/custom/df_2016/images/vgh-enews-header-logo.jpg" border="0" alt="Vancouver General Hospital Foundation Logo"></a></td><td width="200" valign="top">&nbsp;</td><td width="196" valign="top"><table border="0" cellspacing="0" cellpadding="0" width="196"><tr><td height="25">&nbsp;</td></tr><tr><td height="38" valign="top"></td></tr><tr><td height="25" valign="top">&nbsp;</td></tr></table></td></tr></table></td></tr></table></td></tr>
```
