---
title: Links
description: Here's how we do links at the foundation.
---

## Google Parameters

We use the following five parameters for url tracking (google analytics). If the url has a question mark anywhere in it you want to add `&utm_source=something&utm_medium=something&utm_campaign&utm_content=something&utm_term=something`.
If it <span style="text-decoration: underline;">doesn't have a question mark</span> you want to add <br>`?utm_source=something&utm_medium=something&utm_campaign&utm_content=something&utm_term=something` <br>to the end.

* <strong>source</strong>: platform that the email is coming from. (Use eblast for emails)
* <strong>medium</strong>: type of content. (use email for emails that come out of Luminate)
* <strong>content</strong>: Descriptor for the specific email. (Ex. Scotiabank)
* <strong>campaign</strong>: Internal Campaign for how this/these emails are being grouped. (Ex. Angel)
* <strong>term</strong>: Description of what is being used as the link. We do this so we're able to distinguish different links to the same website in an email. (ex. Header_Button)

```html
http://support.vghfoundation.ca/site/Donation2?df_id=1720&mfc_pref=T&1720.donation=form1&utm_source=eblast&utm_medium=email&utm_content=scotiabank&utm_campaign=angel&utm_term=header_button
```

## Redirects
