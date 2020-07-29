---
title: JavaScript API Reference
sidebar_label: JS API Reference
preview: ''

createdAt: 2018-07-5 9:02:52
updatedAt: 2018-07-11 12:42:57

seo:
  title: ''
  desc: ''

tags:
  - api

author: 'John Gracey'
public: True
---
import Code from '../../../src/common/code/'

Wisdom's client side JavaScript API contains a mix of syncronous and asyncronous methods and properties. Wisdom follows industry convension by use of an asyncronous task queue snippet that asyncronously loads the bulk of Wisdom's JavaScript code. This allows certain methods to be invoked immediately, and they will be run as soon as Wisdom finishes loading. The most common async example is `wisdom('init', ...)`.


Methods can be explored with `wisdom.help`.



### Async Methods
These methods will run asynchronously after initialization.

<Code language='javascript' title='Async Methods' code={`
wisdom('init', PROJECT_ID)      // Starts Wisdom, optionally recieves "configs" object as 3rd parameter.
wisdom('identify', IDENTITY_ID) // Identity the current user with your ID.
wisdom('setUserInfo', {})       // Sets basic data about the current user. Some restrictions exist.
wisdom('onReady', callback)     // Runs callback Wisdom after Wisdom initializes.
wisdom('takeCanvasSnapshot', element)   // Records current pixels of all HTML5 canvases on page.
                                        // Optionally accepts a specific canvas element to record.
wisdom('event', eventName, eventData)   // Records a custom user event.
`}/>



### Static Methods
These exist after initialization.

<Code language='javascript' title='Static Methods' code={`
wisdom.getIdentityId()  // Returns the identityId if available.
wisdom.getSessionURL()  // Returns the URL for viewing this session at the current time.
                        // Optionally takes a date.
wisdom.toString()       // Returns 'Wisdom: Session Replay.'
`}/>


### Static Properties
These read only properties are safe to use any time.

<Code language='javascript' title='Static Methods' code={`
wisdom.identityId   // Returns the identityId if available.
wisdom.projectId    // Returns the projectId if available.
wisdom.isReady      // Returns true if Wisdom is currently initialized.
wisdom.help         // Returns this help message.
`}/>


For more information on the JS Client API, visit https://help.GetWisdom.io




# Examples

For those who just want to play around with some code, the following examples are for you.

<Code language='javascript' title='Examples' code={`
// Add Wisdom's async script loader and method queue.
!function(W,I,S,D,O,M){"use strict"; if(S.__WISDOM__INIT__OBJECT_REFERENCE=W,!(W in S)){var f=S[W]=function(){arguments.length&&f.q.push({args:arguments,ts:new Date})};
f.ts=new Date,f.q=[]; var g=D.createElement("script");g.src="https://script.getwisdom.io/v"+(I|0),g.type="text/javascript",g.charset="UTF-8",g.crossOrigin="anonymous",g.async=!0;
var h=D.getElementsByTagName("script")[0];h.parentNode.insertBefore(g,h)}}("wisdom",1,window,document);
\n
// ...
\n
wisdom('init', __YOUR_PROJECT_ID_HERE__);\n
wisdom('identify', __UNIQUE_USER_IDENTITY_ID_HERE__);\n
wisdom('setUserInfo', {
  firstName: 'John',
  lastName: 'Doe',
});
\n
// Optional onReady callback. 
// Can be called anytime, as many times as desired.
wisdom('onReady', () => {
  // Wisdom is now running
  wisdom.getSessionURL();  
  // Example:
  // "https://app.getwisdom.io/org/100/project/100/gallery/john@example.com?date=1569171075406&sid=xxxxxxxxx"
  wisdom.getUserProfileURL()
  // Example:
  // "https://app.getwisdom.io/org/100/project/100/dashboard/audience/user-view/john@example.com"
  wisdom.isReady      // true
  wisdom.projectId    // The value of __YOUR_PROJECT_ID_HERE__
  wisdom.identityId   // john@example.com
  wisdom.help         // Prints out help message\n
  wisdom.restart();
  wisdom.stop();      // Stops and Clears everything.
});
`}/>

