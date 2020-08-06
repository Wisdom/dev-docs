---
title: Censoring Sensitive Information
sidebar_label: Censoring Sensitive Information
---

import Image from '@theme/IdealImage';



Wisdom goes to great lengths to ensure sensitive information never makes it to our servers. Wisdom exposes client side API configurations in order to ensure sensitive information never makes it into the Wisdom recoding engine.

By default, any input that has any one of the following attributes set to type="password", autocomplete="cc-number"(credit card number) or autocomplete="cc-csc" (credit card security code), is censored.


### Input Field Censorship

Any element that includes the attribute `x-wisdom-private` has the input's values safely ignored by Wisdom.

Any element that includes the attribute `x-wisdom-censor` has the input's values censored, only disclosing the character length of the value.

<br/>

Examples of Inputs that would be censored.
```
<input type="password"><input>

<input type="name" x-wisdom-private><input>

<input type="email" x-wisdom-censor><input>
``` 