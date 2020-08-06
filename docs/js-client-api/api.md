


### JavaScript API

Wisdom's client side JavaScript API contains a mix of synchronous and asynchronous methods and properties. Wisdom follows industry convension by use of an asynchronous task queue snippet that asynchronously loads the bulk of Wisdom's JavaScript code. This allows certain methods to be invoked immediately, and they will be run as soon as Wisdom finishes loading. The most common async example is `wisdom('init', ...)`.

> wisdom.help



   ####Async Methods
   These methods will run asynchronously after initialization.

```js
    wisdom('init', ACCOUNT_ID)              -- Starts Wisdom. Optionally takes a "configs" object as the third parameter.
    wisdom('identify', IDENTITY_ID)         -- Identity the current user with your ID.
    wisdom('setUserInfo', {})               -- Sets basic data about the current user. There are restrictions here.
    wisdom('onReady', callback)             -- Runs callback after Wisdom initializes.
    wisdom('takeCanvasSnapshot')            -- Records the current state of all HTML5 canvases on the page.
    wisdom('event', eventName, eventData)   -- Records a custom user event.
```


  ####Static Methods 
  These exist after initialization.

```js
    wisdom.getIdentityId()          -- Returns the identityId if available.
    wisdom.getSessionURL()          -- Returns the URL for viewing this session at the current time. Optionally takes a date.
    wisdom.toString()               -- Returns 'Wisdom: Session Replay.'
```


   ####Static Properties
   These read only properties are safe to use any time.

```js
    wisdom.identityId           -- Returns the identityId if available.
    wisdom.accountId            -- Returns the accountId if available.
    wisdom.isReady              -- Returns true if Wisdom is currently initialized.
    wisdom.help                 -- Returns this help message.
```


For more information on the JS Client API, visit https://help.GetWisdom.io

