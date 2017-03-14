---
title: S-Tags
description: These are the tags used to insert conditional content into the body of the email.
---

## First Name

The code below checks if they have a first name field, inserts the name if they do or friend if they don't. Use this version rather than [[S1:first_name]] because while we always have this field for people, the first name value doesn't get passed to the "view online" version of the email.

```
[[?xx::x[[S1:first_name]]x::friend::[[S1:first_name]]]]
```

## Primary Salutation

Luminate calls the "primary salutation" field in RE the Casual salutation. You can change this one to [[S1:Salutation_Formal]] if you want their Primary Addressee field to be used instead (beware that one includes titles).

```html
[[?xx::x[[S1:Salutation_Casual]]x::friend::[[S1:Salutation_Casual]]]]
```

## Joint Salutation

Bad news, we can't do joint salutations in emails. It's a field that is on the relationship record between two constituents in RE and Luminate is unable to access those fields.

## Group Membership

It's possible to dynamically load content based on group membership. In this case we changed the text of the first paragraph to change the language of the invite based on which group they were in. It's possible to put the entire message within these if clauses.


```HTML
<convio:when title="Member of Group: NAME OF GROUP" test="eq" selected="selected">
    <convio:op><convio:session name="45" param="48783:IF_KNOWN" ></convio:session></convio:op>
    <!-- If this person is in the group -->
    <convio:op>TRUE</convio:op>
    <convio:then>I am delighted to invite you</convio:then>
  </convio:when>
    <!-- If not in the group -->
  <convio:when title="Not Member of Group: NAME OF GROUP" test="eq">
    <convio:op><convio:session name="45" param="48783:IF_KNOWN" ></convio:session></convio:op>
    <convio:op>FALSE</convio:op>
    <convio:then>I am delighted to invite you and a guest</convio:then>
  </convio:when>
    <!-- If not a constituent/opened through "view online" -->
  <convio:otherwise title="Unknown">I am delighted to invite you</convio:otherwise>
</convio:choose>
```
