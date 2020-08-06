---
title: Overview
sidebar_label: Overview
---

### Censorship

Censorship is a very important concept to understand. There are two methods to limiting what data Wisdom collects available to website owners. We recommend using HTML Configuration (the first method) as much as possible. You can also enable and disable certain Wisdom [recording modules](recording-modules) like cookie tracking and mouse tracking.

<div class='spacer32'></div>

**PRO TIP 1:** Try using Wisdom's [Censorship Checker chrome extension](https://chrome.google.com/webstore/detail/censorship-checker/dfncpeomafiinkokccpdfhcfbdngphoc). It will highlight and animate censored fields for easy privacy management.


**PRO TIP 2:** For paricularily sensitive sections of your web application, in addition to blacklisting individual inputs, you can redundantly block all inputs on a page by scoping CSS selectors by a page or section's element ID.
> eg. `#ecommerce-checkout-form inputs, #ecommerce-checkout-form textarea`


<div class='spacer64'></div>


### 1. HTML Configuration

+ HTML class name: `.__WISDOM__CENSOR`
+ HTML attribute: `[__WISDOM__CENSOR]`


#### Automatically the following CSS Selectors are limited:

+ `input[type="password"]`
+ `[autocomplete="cc-name"]`
+ `[autocomplete="cc-given-name"]`
+ `[autocomplete="cc-additional-name"]`
+ `[autocomplete="cc-family-name"]`
+ `[autocomplete="cc-number"]`
+ `[autocomplete="cc-exp"]`
+ `[autocomplete="cc-exp-month"]`
+ `[autocomplete="cc-exp-year"]`
+ `[autocomplete="cc-csc"]`
+ `[autocomplete="cc-type"]`


<div class='spacer32'></div>

:::caution Privacy Note

Password visibility toggles may cause Wisdom to treat password fields as normally visible plain text fields. Accidentally pasting passwords into username fields, while rare, is possible. For greater defensive privacy practices, it is important to redundantly to add Wisdom's censorship HTML attribute to all password and username fields.

:::

<div class='spacer32'></div>

### 2. Tracking Configurations Page
On the [Tracking Configuration](https://app.getwisdom.io/org/~/tracking) page you can specify CSS selectors to censor HTML elements, including input fields.

Beyond censoring HTML, you can also enable and disable certain Wisdom "recording modules", such as Mouse movement tracking. Please see the list of [recording modules](recording-modules) for their impact on privacy.



### What happens to censored HTML?

HTML (inner) text content and the `value` attribute's value is transformed into a string of bullet points (`•`).



<div class='spacer64'></div>

:::info A note on Bullet Points

Please understand that content length is revealed to Wisdom. If your users are allowed to enter passwords under 6 characters in length, this may become a privacy concern- though likely your security would be the more immediate concern. As every situtation may be different, let us know if you believe string length is a privacy or security concern to your web application- we'll work to provide alternative methods.
:::