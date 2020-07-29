---
title: 'Browser Support & Site Compatibility'
sidebar_label: 'Browser Support'
preview: ''

createdAt: 2018-07-5 9:02:52
updatedAt: 2018-07-11 12:42:57

seo:
  title: ''
  desc: ''

tags:
  - enterprise

author: 'John Gracey'
public: True
---

import Image from '@theme/IdealImage';

### Executive Summary

Wisdom Live View and Co-Browsing for website visitors is supported by 95.7% of US browsers, 92.85% globally.
For agents and administrators using the Wisdom service, only versions of Chrome, Firefox, and IE Edge released within the last year are officially supported.
The limiting factor on both the recording and replay side of Wisdom is [browser support for Mutation Observers](https://caniuse.com/#feat=mutationobserver).
End user browser extensions and configurations may impact actual rates of support.

### Key Support Figures
* Visitor Support
    * Required browser feature: Mutation Observers
    * Global Support: 92.85%
    * U.S.A: 95.7%
    * Canada: 91.42%
    * JavaScript Enabled:  99.7% [1]
* Admin View Supported Browsers
    * Chrome, Firefox, IE Edge versions less than one year old running JavaScript

#### Notes:
[1] source: https://blockmetry.com/blog/javascript-disabled

Blockmetry reports that accounting for non-human traffic, only 0.2% of real users block JavaScript.
Blocking is largely attributed to users of the TOR system, and users from east Asian countries, Africa, and Finland.
JS enablement has held steady since research began in 2010.

### Progressive Features
* JavaScript when disabled gracefully degrades- Nothing is displayed to the user.
* When supported, connections are upgraded from long-polling to web sockets.

While certain recording modules are limited to certain browsers,
overall the major compatibility bottleneck for Wisdom Live View is the Mutation Observer.

<Image img={require('./mutation-observer-support.png')} alt='caniuse.com Browser Support table for Mutation Observer'/>

Source: https://caniuse.com/#feat=mutationobserver

Browser | Version | |
--- | --- | ---
Internet Explorer | 12 |
Edge | 12 | Confirmed v14
Firefox | 31 |
Chrome | 22 |
Safari | 7.1 |
Opera | 23 |
iOS Safari | 7.1 |
Andriod Browser | 4.4 |
BlackBerry Browser | 10 |
Opera Mobile for Android | 37 | Used v42. 100 Million + Downloads ( across all versions )
Chrome for Android | 61 | 1 Billion + Downloads ( across all versions )
Firefox for Android | 55 | 100 Million + ( across all versions )
Internet Explorer Mobile | 11 |
UC Browser for Android | 11.4 |
Samsung Internet for Android | 4 |
QQ Browser | 1.2 |
Baidu Browser | 7.1.2 |
Opera Mini | NO | 100 Thousand + downloads ( 2.7% Global, 0.1% USA 0.25% Canada )

Source: [caniuse.com Websockets](https://caniuse.com/#search=web%20sockets), [caniuse.com Mutation Observer](https://caniuse.com/#search=mutationobserver).

### Other Browsers

There are well over 50 alternative web browsers used globally,
comprising an approximate global market share of less than 3%.
Many alternative browsers are customized forks of open-source browsers such as Webkit/Chromium.
Testing support for each browser running each version and operating system is a challenging and time consuming feat.
As we learn more, we’ll update the table below, on a best efforts basis.

 Browser | Notes
--- | ---
Brave |
Chromium |
TOR |
Onion |
NW.js |
Opera Neon |
Orbitum |
Otter |
Silk |
Tob |
UC Mini |
Vivaldi |
Yandex |
Pale Moon |
Avant |
Waterfox |