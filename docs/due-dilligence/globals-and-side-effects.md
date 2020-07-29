---
title: 'JS Globals & Side Effects'
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

import Code from '../../src/common/code/'

__The team works hard to minimize website side effects. Sometimes leaks are unavoidable or are included by design. These Wisdom side effects are documented here.__

In just about every case, all Wisdom resources have been prefixed with `__WISDOM`. For certain enterprise partners, an additional vendor identifier can be appended to the namespace. For example, a vendor named ACME could utilize the `__WISDOM__ACME` namespace. For resources hosted on scripts.getwisdom.io, a “/namespace/ACME/” vendor directory exists. There are only a few exceptions where vendor identifiers are not used.


### Leaked Globals


**Exposed Wisdom Variables:**
The following variables are intentionally exposed by wisdom, and are customizable.
  * `wisdom`
  * `__WISDOM__INIT__OBJECT_REFERENCE`
  * `__WISDOM__PRIVATE__GLOBALS`


**Polyfills:**
The following variable leaks are expected to be removed in the future.
  * `JSON3`
  * `core`
  * `__WISDOM__MODULE`
  * `__core-js_shared__`

#### Elements & IDs

All HTML Nodes have the property `​__WISDOM__MIRROR__NODE_ID__` set.
Further, two Elements may be created by the Wisdom service depending on tracking configurations:

 - `<div id="__WISDOM__PAGE_PINCH_ZOOM__"></div>`
 - `<iframe id="__WISDOM__IDENTITY_EXCHANGE"></div>`

#### Storage

Wisdom primarily utilizes Local Storage for keeping a few UUIDs.

| Storage Engine     | Side Effect or Variable Leak          | Description |
|:-------------------|:--------------------------------------|:-------------|
|                    | <span>&nbsp;</span>                   |
| **Cookie:**        | <i>(none)</i>                         |
|                    | <span>&nbsp;</span>                   |
| **Local Storage:** |                                       |
|                    | `__WISDOM__USER__ANONYMOUS_ID`        |
|                    | `__WISDOM__USER__VISIT_ID`            |
|                    | `__WISDOM__USER__DEVICE_ID`           | 
|                    | `__WISDOM__ZOOM__BASE_PIXEL_RATIO`    | Fallback system to calculate the browser's zoom level.
|                    |  <span>&nbsp;</span>                  |
| **Session Cookie:**|                                       |
|                    | `__WISDOM__ADMIN__USER__TAB_ID`       | To analyze content navigation paths
|                    |  <span>&nbsp;</span>                  |


### Content Security Policies

__In sending recorded data to the Wisdom servers, certain content security policies (CSPs) must be amended.__

#### Wisdom Core
```
content-security-policy:
script-src: https://script.getwisdom.io/
connect-src:
    wss://producer.getwisdom.io/
    https://producer.getwisdom.io/

    https://cobrowse.getwisdom.io/
    wss://cobrowse.getwisdom.io/
    worker-src: https://script.getwisdom.io/
```

#### 3rd Party Identity Module
```
content-security-policy:
    frame-src: https://wisdom-identity-exchange.com/
    child-src: https://wisdom-identity-exchange.com/
```

### Recording Modules

The following modules when enabled will require CSPs to be amended. See further below for details.
* `CHROME EXTENSION DETECTION`
* `GEOLOCATION`

Notes:
* Although child-src is deprecated and replaced with frame-src, for enhanced compatibility it is included.
* Web workers are not yet supported, but for future proofing is included.
* Certain recording modules will proxy certain JavaScript functions. Each recording module has it’s own documentation.

### Misc
The 3RD PARTY IDENTITY MODULE sends one post message from the `wisdom-identity-exchange.com/` origin containing the visitor’s identityId, if available.

The posted message data includes the property field `__WISDOM__IDENITY__EXCHANGE`.
Note that this property does not support a vendor identifier.
AccountID is also specified in the event data.


### Recording Modules
__Certain recording modules will proxy certain JavaScript functions. See each recording modules documentation for side effects.__

#### Console Recording
Proxies the “console” object using a simple function wrapper.

#### Error Source Type
Proxies window.addEventListener & window.removeEventListener to add a named dummy function in order to record the event listener type into the handler’s stack trace.
When an error occurs, it is possible to determine what event source triggered the error.

The dummy function name for example would be: `__WISDOM_EVENT_SOURCE__mousemove`

#### GeoLocation
HTTP POST to `https://www.googleapis.com/geolocation/v1/geolocate​` to use Google’s IP address geolocation system.
This client side query may deprecate soon due to Wisdom’s own IP geolocation system
determining the visitor’s country already for regulatory compliance reasons.

#### Chrome Extension Detection
This feature loads around 150 of some of the more common Chrome Extensions that have publicly accessible resources.
Sends HTTP HEAD requests to `chrome-extension://*`

NOTE: Content Security Policies will need to include `Connect-Src: chrome-extension://*`

#### Replay Side Leaks:
Since the replay engine does not affect end visitors and JavaScript is not run, replay side leaks take a very low priority. Nonetheless, in good faith they are documented here.

#### Classes
`__WISDOM__TEXT_SELECTION`
`__WISDOM__HOVER_ACTIVE`

#### Script Elements
Note that the tagname has set the XML namespace to WISDOM. Example:
`<WISDOM:SCRIPT-IGNORED>`









### Checking Global Variable leaks yourself

Here is a quick JS snippet to check which variables are leaked globally to help ensure Wisdom is free from naming conflicts.

<Code language='javascript' title='Sanitizer Functions' code={`
function GlobalsMonitor() {
    this.log = {};
    this.changes = {};
    this.additions = {};
    this.deletions = {};\n
    for (let i in window){
        this.log[i] = window[i];
    }\n
    return () => {
        this.itr = (this.itr ||0) + 1;
        for (let i in window){
            if (typeof this.log[i] === 'undefined' && typeof window[i] !== 'undefined') {
                this.additions[i] = window[i];
            }
            else if (this.log[i] !== window[i]) {
                this.changes[i] = window[i];
            }
        }
        for (let i in this.log){
            if (typeof window[i] === 'undefined') {
                // && this.log[i] !== 'undefined'
                this.deletions[i] = window[i];
            }
        }
        console.group('Changes - iteration #', this.itr);
        console.log('\\n\\tAll Additions:', this.additions);
        console.log('\\n\\tAll Changes:', this.changes);
        console.log('\\n\\tAll Deletions:', this.deletions);
        console.groupEnd();
    }
}
const globalsChecker = new GlobalsMonitor();\n\n
// Let's mutate the global state.
!function(W,I,S,D,O,M){"use strict";if(S.__WISDOM__INIT__OBJECT_REFERENCE=W,!(W in S)){var f=S[W]=function(){arguments.length&&f.q.push({args:arguments,ts:new Date})};f.ts=new Date,f.q=[],f.flag=function(){return null};var g=D.createElement("script");g.src="https://script.getwisdom.io/v"+(I|0),g.type="text/javascript",g.charset="UTF-8",g.crossOrigin="anonymous",g.async=!0;var h=D.getElementsByTagName("script")[0];h.parentNode.insertBefore(g,h)}}("wisdom",1,window,document);\n
wisdom('init', __YOUR_PROJECT_ID__);
\n
// Run to check
globalsChecker();\n
setTimeout(globalsChecker, 3000);
`}/>