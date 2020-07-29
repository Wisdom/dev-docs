

### Snippet Installation

Install Wisdom's Live View Integration with a single Javascript snippet. Then you can view the whole customer experience across your entire app. We built it to be lean and effective, with performance optimization as a priority, to be able to run on the largest of applications.


### One Step

Below is an example of your generated script. Simply add the JS snippet in a JS file where the user ID/user data will be fetched (AJAX request) for logged-in users, similar to most other single page application add-ons (like Intercom). Wisdom will asynchronously (without blocking the main thread) load all JavaScript from our global CDN. 

We recommend using a unique *Identity ID* object for each recorded user, for example, the database ID of the user, or the user’s email address if it doesn't change.


```html
<script>  
  !function(W,I,S,D,O,M){"use strict";if(S.__WISDOM__INIT__OBJECT_REFERENCE=W,!(WinS)){varf=S[W]=function(){arguments.length&&f.q.push({args:arguments,ts:newDate})};f.ts=newDate,f.q=[];varg=D.createElement("script");g.src="https://script.getwisdom.io/v"+(I|0),g.type="text/javascript",g.charset="UTF-8",g.crossOrigin="anonymous",g.async=!0;varh=D.getElementsByTagName("script")[0];h.parentNode.insertBefore(g,h)}}("wisdom",1,window,document);


  wisdom('init', __example__, {/* Custom Configs */}, {  
    identityId: __USER_IDENTITY_ID_HERE__, // Required, Example: John@example.com
    firstName:  'John'                     // Optional
    lastName:   'Doe'                      // Optional
    email:      'John@Example.com'         // Optional
    phone:  '1.650.123.4567'           // Optional
    // Many other specially reserved fields and custom fields here can be placed here
  });  
<script>
```

The above snippet is an example of what yours looks like. To find your uniquely generated script for your project, [sign in] (https://app.getwisdom.io/auth/login) and go to the project's tracking code page.

Wisdom is real time, and can be tested by pasting your JS snippet into your browser's developer console. You can watch your own website's interaction inside Wisdom's Live View page. It works asynchronously and causes no noticeable reduction in resource timing.

Don't forget to setup censorship privacy controls. A good start is to censor all HTML form fields, like `&lt;textarea/&gt;` and `&lt;input/&gt;`.
