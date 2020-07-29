---
title: Configuring Recording Modules
sidebar_label: Recording Modules
preview: ''

createdAt: 2018-07-5 9:02:52
updatedAt: 2018-07-11 12:42:57

seo:
  title: ''
  desc: ''

tags:

author: ''
public: True
---
import Code from '../../src/common/code/'
import Image from '@theme/IdealImage';


Beyond HTML censorship, may different recorders can be enabled or disabled. By default, most recorders are enabled, with a few exceptions. Recorders can be configured by manually removing them using JavaScript. See below for examples.

<div class='spacer32'></div>

**NOTE:** Remote configurations (set on the tracking configuration page) are cached for performance reasons, so changes may take up to 15 minutes to take effect.



## Recorders



|Group                    | Recorder Name            | ID            | GUI Conf | Default Enabled| Description                     |
|:------------------------|:-------------------------|:--------------|:---:|:---:| -----------------------------------------------:|
|**App Diagnostics**      |                          |               |     |    |                                          &nbsp;|
|                         |  Redux Actions           | `redux`       | ✓  | ✗  |                                          &nbsp;|
|                         | Network Requests (Fetch) | `fetch`       | ✓  | ✗  |                                          &nbsp;|
|                         | Network Requests (XHR)   | `xhr`         | ✓  | ✗  |                                          &nbsp;|
|                         |  Console Log             | `console`     | ✓  | ✓  |                                          &nbsp;|
|                         | HTML5 Storage/Cookies    | `storage`     | ✓  | ✓  |                                          &nbsp;|
|                         |Errors/Uncaught Exceptions| `errors`      | ✓  | ✓  |                                          &nbsp;|
|                         |Network Timing            |`performance`  | ✓  | ✗  |                                          &nbsp;|
|                         | Slow Event Loop          |`slowEventLoop`| ✗  | ✗  |                                          &nbsp;|
|                         | Timeseries Stats         | `stats`       | ✓  |  ✓ |                                          &nbsp;|
|                         | CSP Violations           | `cspViolation`| ✓  |  ✓ |                                          &nbsp;|
|                         |                          |               |     |    |                                          &nbsp;|
|**UX Frictions**         |                          |               |     |    |                                          &nbsp;|
|                         |Rage Clicks               | `rageClick`   | ✗  |  ✓ |                                          &nbsp;|
|                         |Page Translation          | `translation` | ✗  |  ✓ |                                          &nbsp;|
|                         |                          |               |     |    |                                          &nbsp;|
|**Browser Visualization**|                          |               |     |    |                                          &nbsp;|
|                         | HTML change recording    | `html`        | ✓  | ✓  |                                          &nbsp;|
|                         | HTML5 Canvas             | `canvas`      | ✓  | ✗  |                                          &nbsp;|
|                         | Zoom                     | `zoom`        | ✗  | ✓  |                                          &nbsp;|
|                         | Browser Resize           | `windowResize`| ✗  | ✓  |                                          &nbsp;|
|                         | Browser Move             | `windowMove`  | ✗  | ✓  |                                          &nbsp;|
|                         | Device orientation       | `orientation` | ✗  | ✓  |                                          &nbsp;|
|                         |                          |               |     |    |                                          &nbsp;|
| **Engagement Analysis** |                          |               |     |    |                                          &nbsp;|
|                         | URL Location             | `url`         | ✗  | ✓ |                                           &nbsp;|
|                         | Scroll                   | `scroll`      | ✗  | ✓ |                                           &nbsp;|
|                         | Tab Visibility           |`tabVisibility`| ✓  | ✓ |                                           &nbsp;|
|                         | Text Selection           |`textSelection`| ✓  | ✓ |                                           &nbsp;|
|                         | Clipboard                | `clipboard`   | ✓  | ✓ |                                           &nbsp;|
|                         | Mouse tracking           | `mouseTouch`  | ✓  | ✓ |                                           &nbsp;|
|                         | Hover Recorder           |`hoverRecorder`| ✓  | ✓ |                                           &nbsp;|
|                         | Context-menu             |  `contextMenu`| ✗  | ✓ |                                           &nbsp;|
|                         | Focus/blur               |  `focusBlur`  | ✗  | ✓ |                                           &nbsp;|
|                         | Print Detection          |  `print`      | ✗  | ✓ |                                           &nbsp;|
|                         | Form field input         |  `inputs`     | ✓  | ✓ |                                           &nbsp;|
|                         | Track Reserved Events    |`reservedEvent`| ✓  | ✓ |                                           &nbsp;|
|                         | Track Custom Events      |`customEvent`  | ✓  | ✓ |                                           &nbsp;|
|                         |                          |               |    |    |                                           &nbsp;|
|                         |                          |               |    |    |                                           &nbsp;|
 







### Application Diagnostics

These modules help fix bugs and performance concerns faster, and typically include less PII.



- Chrome Extension Detection `extensions` <badge class='badge--info'>✓ GUI</badge>


### Browser Tracking
- Browser tracking (Adblock, fingerprint) `browserTracking` <badge class='badge--info'>✓ GUI</badge>


### UX Friction
- Dead clicks
- <b>NOTE:</b> Error clicks are precombined with errors and support all events (ex. mouseover).


### User Context recording
- Geolocation coordinates (IP based) `geolocation` <badge class='badge--info'>✓ GUI</badge>

### Miscellaneous
- Custom Event Recording `customEvents` <badge class='badge--info'>✓ GUI</badge>
- Reserved standard events `reservedStandardEvent`



## Examples

You can overwrite (merge local and remote) configurations by specifying boolean values for each module.

<Code language='javascript' title='Utility: On Ready' code={`
wisdom('init', __YOUR_PROJECT_ID_HERE__, {
  recorders: {
    translation: true,    // Enables detection of Google Chrome's Translate Extension
    console: false,       // Disables console.*() recording
    storage: false,       // Disables cookie, localStorage, sessionStorage recording
    textSelection: false, // Disables detection of user highlighting/selecting text.
    inputs: false,        // Disables all input fields - Also configurable by GUI
    geolocation: false    // Disables recording of IP based Geolocation coordinates
    orientation: true     // Disables detection of device rotation [portrait|landscape]
  }
});
`}/>




<div class="spacer128"></div>


:::note Reminder

**Other static information is recorded for all sessions including:**
- IP Addresses
- Start & End time
- Timezone
- User Agent
- Clock Skew
- Referrer
- Max Touch Points
- Languages Requested
- screen dimensions
- UTM properties
etc.

:::