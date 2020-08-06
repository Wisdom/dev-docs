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
import Code from '../../../../src/common/code/'

Wisdom's client side JavaScript API contains a mix of synchronous and asynchronous methods and properties. Wisdom follows industry convension by use of an asynchronous task queue snippet that asynchronously loads the bulk of Wisdom's JavaScript code. This allows certain methods to be invoked immediately, and they will be run as soon as Wisdom finishes loading. The most common async example is `wisdom('init', __PROJECT_ID__, opts)`.











# Async Methods
These methods will run asynchronously after initialization.

<Code language='javascript' title='Async Methods' code={`
wisdom('init', __PROJECT_ID__)         // Starts Wisdom. Optionally "configs" object as 3rd param.
wisdom('identify', __IDENTITY_ID__)    // Identity the current user with your ID.
wisdom('setUserInfo', {...})           // Sets basic data about the current user. Some restrictions exist.\n
wisdom('onReady', callback)            // Runs callback Wisdom after Wisdom initializes.
wisdom('onFail', callback)
wisdom('bail')                         // End Wisdom without recording any data.\n
wisdom('end')
wisdom('restart')
wisdom('logougAndEnd')
wisdom('logoutAndRestart')
wisdom('forgetUser')\n
wisdom('takeCanvasSnapshot', elementOptional) // Records current pixels of all HTML5 canvases on page.
                                              // Optionally accepts a specific canvas element to record.
wisdom('track', eventName, eventData)         // Records a custom user event.
wisdom('trackReserved', eventName, eventData) // Records a custom user event.
wisdom('reduxAction', action, prevState, nextState, opts)
wisdom('setActiveCompanyId', companyId)       // Sets "activeCompanyId" property on the User.
                                              // companyId must be a String or Integer.
`}/>


# Static Methods
These exist after initialization.

<Code language='javascript' title='Static Methods' code={`
wisdom.flag()\n
wisdom.getSessionURL()        // Returns the URL for viewing this session at the current time.
                              // Optionally takes a date to reference a point in time.
wisdom.getUserProfileURL()
wisdom.getIdentityId()        // Returns the identityId if available. \n
wisdom.getConfigs()
wisdom.getVersion()\n
wisdom.end()                  // End Wisdom without recording any data.
wisdom.bail()
wisdom.restart()
wisdom.forgetUser()\n
wisdom.logoutAndEnd()
wisdom.logoutAndRestart()\n
wisdom.toString()             // Returns 'Wisdom: Session Replay.'
`}/>


# Static Properties
These read only properties are safe to use any time.

<Code language='javascript' title='Static Methods' code={`
wisdom.identityId   // Returns the identityId if available.
wisdom.projectId    // Returns the projectId if available.
wisdom.sessionId    // Returns the sessionId if available.
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
wisdom('init', __YOUR_PROJECT_ID_HERE__);\n
wisdom('identify', __UNIQUE_USER_IDENTITY_ID_HERE__);\n
wisdom('setUserInfo', {
  firstName: 'John',
  lastName: 'Doe',
});
\n
// Optional onReady callback. Can be called anytime, as many times as desired.
wisdom('onReady', () => { // Wisdom is now running
  wisdom.getSessionURL();  
  // Example:  ""https://app.getwisdom.io/org/x/project/x/gallery/john@example.com?date=1569171075406&sid=xxxxxxxx-81e2-4df1-8a2f-xxxxxxxxxxxx"
  wisdom.getUserProfileURL()
  //  Example: "https://app.getwisdom.io/org/x/project/x/dashboard/audience/user-view/john@example.com"
  wisdom.isReady      // true
  wisdom.accountId    // What you provide, in this case the value of __YOUR_ACOUNT_ID_HERE__
  wisdom.identityId   // john@example.com
  wisdom.help         // Prints out help message\n
  wisdom.restart();
  wisdom.stop();      // Stops and Clears everything.
  wisdom.bail()       // Stops, without saving any data.
});
`}/>








### SetUserInfo

### Reserved Traits

Trait Name | Type | Description
---|---|---
`identityId`   |  string  | Unique ID in your database for a user
`username`     |  String  | This should be unique to each user, like the usernames of Twitter or GitHub.
`avatarURL`    |  String  | URL to an avatar image for the user
`userRole`     |  String  | The application role of a user (Example: "Admin", "Member")
`email`        |  String  | Phone number of a user
`phone`        |  String  | Email address of a user
`firstName`    |  String  | First name of a user
`lastName`     |  String  | Last name of a user
`companyIds`   |  Array   | List of Company IDs the user is part of. Example: ['112','113']
`plan`         |  String  | Current billing plan used by user
`totalSpend`   |  Number  | Total application spend of a user
`birthday`     |  Date    | Date of birth of the user
`firstSeen`    |  Date    | Date the user was first seen
`registeredAt` |  Date    | Date the user’s account was first created






### Complete Configuration Reference

In addition to the lengthly JavaScript snippet below, you can view the configurations for a particular project, in your geographic area by pluggin in your projectId to the following URL:  
[https://producer.getwisdom.io/project/____:projectId____/config](https://producer.getwisdom.io/project/__PROJECT_ID_HERE___/config)

<Code language='javascript' title='Example: All together now' code={`
wisdom('init', __PROJECT_ID__, {
  debug: false,
  buildHash: 'v2.7.3__70789fb021036ecc', // example
  ingestionServer: 'producer.getwisdom.io',
  featureFlags: false,\n
  sanitizers: {
    replaceText: [funcs, funcs],       // Function Signature: (str, element, isCensored)
    replaceValue: [funcs, funcs],      // Function Signature: (str, element, isCensored)
    censorElement: [funcs, funcs],     // Function Signature: (element)
    censorStorageVal: [funcs, funcs],  // Function Signature: ([key, val])
    url: [funcs, funcs],               // Function Signature: (urlStr)
    network: [funcs, funcs],           // Function Signature: ({reqObj, resObj})
    reduxState: [funcs, funcs],        // Function Signature: (stateObj)
    reduxAction: [funcs, funcs],       // Function Signature: (actionObj)
  },\n
  main: {
    master: true,
    trafficLoad: 100,
    crossDomainIdentity: {
      enabled: false,
      origins: [],
    },
    clientIntegrity: {
      enabled: false,
    },
    ipBlocking: {
      enabled: false,
    }
  },
  integrations: {
    segment: true,
    intercom: true,
    googleAnalytics: true,
    userVoice: true,
    heap: true,
    mixpanel: true,
    wootric: true,
    bugsnag: true,
    trackjs: true,
    sentry: true,
    rollbar: true,
    drift: true,
    liveChat: true,
    qualaroo: true,
    olark: true,
    errorception: true,
  },
  recorders: {
    html: true,
    mouseTouch: true,
    inputs: true,
    performance: false,
    errors: true,
    browserTracking: false,
    textSelection: true,
    tabVisibility: true,
    hoverRecorder: true,
    canvas: false,
    customEvents: true,
    console: true,
    extensions: false,
    clipboard: true,
    storage: true,
    geolocation: false,
    redux: true,
    fetch: false,
    xhr: false,
    stats: true,
  },
  censorship: {
    cssSelectors: {
      enabled: true,
      selectors: ['input[type="password"]'],
    },
    urlParams: {
      enabled: true,
      params: ['auth_token'],
    }
  },
}
`}/>