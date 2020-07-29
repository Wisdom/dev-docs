### Examples

For those who just want to play around with some code, the following examples are for you.

```js

// Add Wisdom's async script loader and method queue.
!function(W,I,S,D,O,M){"use strict"; if(S.__WISDOM__INIT__OBJECT_REFERENCE=W,!(W in S)){var f=S[W]=function(){arguments.length&&f.q.push({args:arguments,ts:new Date})};
f.ts=new Date,f.q=[]; var g=D.createElement("script");g.src="https://script.getwisdom.io/v"+(I|0),g.type="text/javascript",g.charset="UTF-8",g.crossOrigin="anonymous",g.async=!0;
var h=D.getElementsByTagName("script")[0];h.parentNode.insertBefore(g,h)}}("wisdom",1,window,document);


wisdom('init', __YOUR_ACOUNT_ID_HERE__, {}, {
  identityId: 'john@example.com',
  firstName: 'John',
  lastNAme: 'Doe'
});


// Optional onReady callback. Can be called anytime, as many times as desired.
wisdom('onReady', () => {
  // Wisdom is now running

  wisdom.getSessionMomentURL() // Capture the point in time.
    // Example:  "https://app.getwisdom.io/account/OJjACFUc/gallery/jagracey%40gmail.com?date=1520712122544&sid=c08d0506-55c6-4f10-a974-187eda778536"
  wisdom.getSessionURL()  
  // Example:  "https://app.getwisdom.io/account/OJjACFUc/gallery/jagracey%40gmail.com?sid=c08d0506-55c6-4f10-a974-187eda778536"

  wisdom.getUserProfileURL()
  //  Example: "https://app.getwisdom.io/account/OJjACFUc/gallery/jagracey%40gmail.com"

  wisdom.getConfigs() // May not be a stable long term API method.
  // Returns raw configuration object.

  wisdom.isReady  // true
  wisdom.accountId    // What you provide, in this case the value of __YOUR_ACOUNT_ID_HERE__
  wisdom.identityId   // john@example.com
  wisdom.help   // Prints out help message


  wisdom.cobrowse.prompt()  // Optional convenience popup for asking if the user wants to cobrowse.
  wisdom.cobrowse.start()
  wisdom.cobrowse.stop()

  wisdom.restart();
  wisdom.stop() // Stops and Clears everything.

});

```
