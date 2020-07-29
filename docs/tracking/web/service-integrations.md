---
title: Integrations
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



import Image from '@theme/IdealImage';


# Integrations




:::note Remember
**There are 3 types of Wisdom URLs available to link back to Wisdom:**
- wisdom.getSessionURL()
- wisdom.getUserProfileURL()
- wisdom.getUserGalleryURL()
:::


Wisdom can be [configured](https://app.getwisdom.io/org/~/tracking) to automatically inject various Wisdom properties into 3rd party services. Wisdom will match the relevant data context by pushing a session URL for events and push profile URLs for identities.


<a href="https://app.getwisdom.io/org/~/tracking" target="blank" rel="noopener">Tracking Configuration Page</a>
<Image img={require('./integrations.png')} className='noShadow'/>



<div class='spacer64'></div>

<bigtable>

Integration | Logo | Code Name | Default Enabled | Description |
------------|------|-----------|-----------------|-------------|
**Segment**          | <img src='https://assets.getwisdom.io/3rd-party-logos/segment.png' style={{maxWidth: '110px', height: '30px'}}/>          | `segment`         | ✓ | Inject user profile value into field `Wisdom` of segment's `analytics.identify(...);`
**Intercom**         | <img src='https://assets.getwisdom.io/3rd-party-logos/intercom.svg' style={{maxWidth: '110px', height: '30px'}}/>         | `intercom`        | ✓ | Merges `window.intercomSettings` with `{'Wisdom': getUserProfileURL()}`.
**Google Analytics** | <img src='https://assets.getwisdom.io/3rd-party-logos/google-analytics.svg' style={{maxWidth: '110px', height: '30px'}}/> | `googleAnalytics` | ✓ | Calls `ga('send', 'event', 'Wisdom', getSessionURL(), { nonInteraction: true });`
**UserVoice**        | <img src='https://assets.getwisdom.io/3rd-party-logos/uservoice.svg' style={{maxWidth: '110px', height: '30px'}}/>        | `userVoice`       | ✓ | Calls `UserVoice.push(['set', 'ticket_custom_fields', {'Wisdom Session': getSessionURL()}]);`
**Heap**             | <img src='https://assets.getwisdom.io/3rd-party-logos/heap.svg' style={{maxWidth: '110px', height: '30px'}}/>             | `heap`            | ✓ | Calls `heap.addUserProperties({ Wisdom: getUserProfileURL() });`
**Mixpanel**         | <img src='https://assets.getwisdom.io/3rd-party-logos/mixpanel.svg' style={{maxWidth: '110px', height: '30px'}}/>         | `mixpanel`        | ✓ | Calls `mixpanel.people.set({ Wisdom: getUserProfileURL() });`
**Wootric**          | <img src='https://assets.getwisdom.io/3rd-party-logos/wootric.png' style={{maxWidth: '110px', height: '30px'}}/>          | `wootric`         | ✓ | Merges `{ Wisdom: getUserProfileURL() }` into `wootricSettings.properties`
**BugSnag**          | <img src='https://assets.getwisdom.io/3rd-party-logos/bugsnag.svg' style={{maxWidth: '110px', height: '30px'}}/>          | `bugsnag`         | ✓ | Merges `{Wisdom: getUserProfileURL()}` into `w.Bugsnag.user`, and sets `Bugsnag.beforeNotify = function (payload, metaData) { metaData.WisdomSession = getSessionURL(); }`
**TrackJS**          | <img src='https://assets.getwisdom.io/3rd-party-logos/trackjs.svg' style={{maxWidth: '110px', height: '30px'}}/>          | `trackjs`         | ✓ | Calls `trackJs.addMetadata('Wisdom URL', getUserProfileURL());`
**Sentry**           | <img src='https://assets.getwisdom.io/3rd-party-logos/sentry.svg' style={{maxWidth: '110px', height: '30px'}}/>           | `sentry`          | ✓ | Calls `Raven.setExtraContext({ Wisdom: getUserProfileURL() });`
**Rollbar**          | <img src='https://assets.getwisdom.io/3rd-party-logos/rollbar.svg' style={{maxWidth: '110px', height: '30px'}}/>          | `rollbar`         | ✓ | Calls `Rollbar.configure({transform(obj) {obj['Wisdom Session'] = getSessionURL();}});`
**Drift**            | <img src='https://assets.getwisdom.io/3rd-party-logos/drift.png' style={{maxWidth: '110px', height: '30px'}}/>            | `drift`           | ✓ | Calls `drift.track('Wisdom', { WisdomSession: getSessionURL() });`
**LiveChat**         | <img src='https://assets.getwisdom.io/3rd-party-logos/livechat.svg' style={{maxWidth: '110px', height: '30px'}}/>         | `liveChat`        | ✓ | Calls `__lc.visitor = {'Wisdom': getUserProfileURL()};`
**Qualaroo**         | <img src='https://assets.getwisdom.io/3rd-party-logos/qualaroo.svg' style={{maxWidth: '110px', height: '30px'}}/>         | `qualaroo`        | ✓ | Calls `_kiq.push(['set', { WisdomSession: getSessionURL() }]);`
**Olark**            | <img src='https://assets.getwisdom.io/3rd-party-logos/olark.svg' style={{maxWidth: '110px', height: '30px'}}/>            | `olark`           | ✓ | Calls `olark('api.visitor.updateCustomFields', {WisdomUrl: getSessionURL()})`  and `olark('api.chat.sendNotificationToOperator', {body: "Wisdom Session: "+getSessionURL()"});`
**Errorception**     | <img src='https://assets.getwisdom.io/3rd-party-logos/errorception.svg' style={{maxWidth: '110px', height: '30px'}}/>     | `errorception`    | ✓ | Calls `_errs.meta = {Wisdom: getUserProfileURL()};`

</bigtable>


## Examples

You can overwrite (merge local and remote) configurations by specifying boolean values for each integration.

```js
wisdom('init', __YOUR_PROJECT_ID_HERE__, {
  integrations: {
    segment: true,
    intercom: false,
    googleAnalytics: false,
    userVoice: true,
    heap: false,
  }
}, {
  identityId: 'John@Example.com',
  firstName: 'John'
  traits: {
    // Other custom and reserved props here
  }
});
```

If you don't see an integration here that you would like, [let us know](https://getwisdom.io/contact)
