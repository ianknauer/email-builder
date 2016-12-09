---
title: Event Info
description: A nice pull out feature for displaying information for an event invitation.
---

## Date Left, Event info right

Change the date text under the `<!-- Enter Date Here -->` Comment and the location under the `<!-- Enter Location Here -->` Comment. Use `<br>` to break text into different lines. 

```example
<tr>
  <td valign="top">
    <table border="0" cellspacing="0" cellpadding="0" width="100%" align="center">
      <tr>
        <td valign="top" width="40%" style="border-right: 2px solid #c9c9c9; padding: 20px 20px 10px; text-align: center;">
          <img border="0" src="http://support.vghfoundation.ca/custom/emails/date.png" alt="date icon">

        </td>
         <td valign="top" width="60%" style="padding: 20px 20px 10px; text-align: center;">
         <img border="0" src="http://support.vghfoundation.ca/custom/emails/map.png" alt="date icon">
        </td>
      </tr>
      <tr>
        <td valign="top" width="40%" style="border-right: 2px solid #c9c9c9; padding: 0 20px 30px; text-align: center; font-family: Arial, Helvetica, sans-serif; font-weight: bold; font-size: 18px;">
          <!-- Enter Date Here -->
          Thursday<br>
          Sept 15, 2016<br>
          6pm - 9pm
          <br>
        </td>
         <td valign="top" width="60%" style="padding: 0 20px 30px; text-align: center; font-family: Arial, Helvetica, sans-serif; font-weight: bold; font-size: 18px;">
         <!-- Enter Location Here -->
          51 East Pender St,<br>
          Vancouver BC V6A 1S9<br>
          <span style="font-size: 14px; font-weight: normal;">(Wing Sang Building, Rennie Collection)</span>
          <br>
        </td>
      </tr>
    </table>
  </td>
</tr>
```
