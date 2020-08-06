---
title: Using Replayed Remote Developer Tools
sidebar_label: Using Replayed Remote Developer Tools
---

import Image from '@theme/IdealImage';


## What are Remote Developer Tools
Developer tools help developers uncover bugs and performance concerns. Wisdom provides access to advanced browser information, console logs, error stack traces, HTML5 storage and cookies, and inspect the HTML DOM.

## Using Wisdom's Remote Developer Tools

Using Wisdom developer tools is easy. Inside the user session gallery, for both live and historical recorded sessions, you can view the developer tools for any particular replayed browser by by clicking on the virtual browser's <Image img={require('../images/devtools-btn-alone.jpg')} size={16} className='inline'/> icon in the navigation control bar. 



<Image img={require('../images/Screenshot1-framed.jpg')}/>


<center>

Click on the virtual browser's 
<Image img={require('../images/devtools-btn-alone.jpg')} size={16} className='inline'/> icon in the control bar. 

</center>


<Image img={require('../images/devtools-btn-scaled.jpg')}/>



## Console Logs & Error Stack Traces

Console logs (`log`, `info`, `debug`, `warn`, and `error`) and thrown Errors can be read from the  `Console` tab inside the developer tools view. 

<Image img={require('../images/devtools-bar.png')}/>

On the far right of the console log view, you can click on the resource link to view the unminified stacktrace code that triggered the console or error event.

<Image img={require('../images/stacktrace.png')}/>


## HTML5 Storage & Cookies

HTML5 Storage & Cookies can be seen from the `Storage` tab inside the developer tools view. Please note, some cookies entries are restricted from front-end JavaScript recording. This occurs when cookies are protected with <a href='https://en.wikipedia.org/wiki/HTTP_cookie#HttpOnly_cookie' rel='nofollow noopener'>HttpOnly</a> or <a href='https://en.wikipedia.org/wiki/HTTP_cookie#Secure_cookie' rel='nofollow noopener'>Secure</a> flags.


<Image img={require('../images/devtools-bar--storage.png')}/>


## Resource Performance Timeline

Wisdom monitors the performance details of all web resources loaded on the page- everything from JS & XML, all the way to the images loaded inside CSS files. Please note, for security reasons some browsers do not display Network Timing for Cross Origin resources unless they are served with the <a href='https://www.w3.org/TR/resource-timing-1/#cross-origin-resources' rel='nofollow noopener'>Timing-Allow-Origin HTTP header</a>.


<Image img={require('../images/performance-slim.jpg')}/>


<Image img={require('../images/performance.jpg')}/>
