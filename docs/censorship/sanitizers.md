---
title: Configuring Sanitizer Functions
sidebar_label: Sanitizer Functions
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



## Quick Intro
Before jumping into individual sanitization methods, here is some quick conventional code to jump in to.

<Code language='javascript' title='Sanitizer Functions' code={`
\n
const sanitizers = {
    replaceText: [funcs, funcs],       // Function Signature: (str, element, isCensored)
    replaceValue: [funcs, funcs],      // Function Signature: (str, element, isCensored)
    censorElement: [funcs, funcs],     // Function Signature: (element)
    censorStorageVal: [funcs, funcs],  // Function Signature: ([key, val])
    url: [funcs, funcs],               // Function Signature: (urlStr)
    network: [funcs, funcs],           // Function Signature: ({reqObj, resObj})
    reduxState: [funcs, funcs],        // Function Signature: (stateObj)
    reduxAction: [funcs, funcs],       // Function Signature: (actionObj)
};
\n
wisdomAdmin('init', 7, {
  sanitizers,
});
`}/>


### Full Example
Jump in with some code before we explain each method individually.

<Code language='javascript' title='Example Sanitizers' code={`
\n
import _ from 'lodash'; // example dependency\n
const sanitizers = {
  replaceText: [
    (str, el, isCensored) => {
     // Replace all numbers within body.
     return document.body.contains(el) 
        ? str.replace(/[0-9]/g, '*')
        : str;
    }
  ],\n
  replaceValue: [
    (str, el, isCensored) => {
     // Remove all letters from form field values.
     return str.replace(/[a-zA-Z]/g, '*');
    }
  ],\n
  censorElement: [
    // Censor all header tags.
    el => el.tagName.startsWith('h'),
  ],\n
  censorStorageVal: [
    ([key, val]) => {
     // Censor matching cookies, localstorage, sessionStorage
     return key.startsWith('_') || key==='authJWT';
    },
  ],\n
  url: [
    (url) => {
      // Delete "secret" and "authtoken" parameters.
      try {
        const u = new URL(url);
        u.searchParams.delete('secret');
        u.searchParams.delete('authtoken');
        return u+'#__';
      }
      catch (e) {
        return url;
      }
    }
  ],\n
  network: [
    ({req, res}) => {
      // You may delete values, though for debugging, 
      // often overwrite paints a more complete picture.
      let censoredReq = _.cloneDeep(req);
      _.set(censoredReq, 'headers.password', '__CENSORED__');
      _.set(censoredReq, 'headers.x-auth', '__CENSORED__');
      return {req: censoredReq, res,}
    }
  ],\n
  reduxState: [
    (state) => {
      // Ommit certain properties from 
      // Redux State, like passwords.
      return _.omit(state, ['user.password']);
    },
  ],\n
  reduxAction: [
    (action) => {
      // Ommit certain action properties from Redux, like passwords.
      // Remember to return a clone of the action.
      if (action.type === 'SET_USER_FULFILLED') {
        let actionClone = _.cloneDeep(action);
        _.set(actionClone, 'account.user.password', '__CENSORED__');
        _.set(actionClone, 'example.nested.deeply', '__CENSORED__');
        return actionClone;
      }
      return action;
    }
  ],
};\n
wisdomAdmin('init', 7, {
 sanitizers,
});
`}/>




## Sanitizer Hooks Reference



### Sanitize Page Text

`replaceText` method hook:

- `str` The element's text.
- `el` The element reference
- `isCensored` Whether the element is considered
- `return`: new string

Imagine for a moment you have a banking app. Here is how you can change all numbers of the webpage text (not form inputs) to bullet points.

<Code language='javascript' title='Example Sanitizers' code={`
wisdomAdmin('init', 7, {
  sanitizers: {
    replaceText: [
        (str, el, isCensored) => {
          // Replace all numbers within body.
          return document.body.contains(el) 
            ? str.replace(/[0-9]/g, '*') 
            : str;
        }
    ],
  }
}); 
`}/>


### Sanitize Form Values


<Code language='javascript' title='Example Sanitizers' code={`
wisdomAdmin('init', 7, {
  sanitizers: {
    replaceValue: [
        (str, el, isCensored) => {
          // Remove all letters from form field values.
          return str.replace(/[a-zA-Z]/g, '*');
        }
    ],\n
  }
});
`}/>


### Censor Element
Which elements to sanitize- triggers various scrubbers- like element.value and text.

<Code language='javascript' title='Example Sanitizers' code={`
wisdomAdmin('init', 7, {
  sanitizers: {
    censorElement: [
        // Censor all header tags.
        el => el.tagName.startsWith('h'),
    ],\n
  }
});
`}/>


### Sanitize Browser Storage
Local Storage, Session Storage, Cookies.

<Code language='javascript' title='Example Sanitizers' code={`
wisdomAdmin('init', 7, {
  sanitizers: {
    censorStorageVal: [
        ([key, val]) => {
          // Censor matching cookies, localstorage, sessionStorage
          return key.startsWith('_') || key==='authJWT';
        },
    ],
  }
});
`}/>




### Sanitize URLs


<Code language='javascript' title='Example Sanitizers' code={`
wisdomAdmin('init', 7, {
  sanitizers: {
    url: [
        (url) => {
            // Delete "secret" and "authtoken" parameters.
            try {
                const u = new URL(url);
                u.searchParams.delete('secret');
                u.searchParams.delete('authtoken');
                return u+'#__';
            }
            catch (e) {
                return url;
            }
        }
    ],
  }
});
`}/>

### Sanitize Network Request + Response

<Code language='javascript' title='Example Sanitizers' code={`
import _ from 'lodash'; // example dependency\n
wisdomAdmin('init', 7, {
  sanitizers: {
    network: [
        ({req, res}) => {
            // You may delete values, though for debugging, 
            // often overwrite paints a more complete picture.
            let censoredReq = _.cloneDeep(req);
            _.set(censoredReq, 'headers.password', '__CENSORED__');
            _.set(censoredReq, 'headers.x-auth', '__CENSORED__');
            return {req: censoredReq, res,}
        }
    ],
  }
});
`}/>


### Sanitize Redux State

<Code language='javascript' title='Example Sanitizers' code={`
import _ from 'lodash'; // example dependency\n
wisdomAdmin('init', 7, {
  sanitizers: {
    reduxState: [
        (state) => {
            // Ommit certain properties from 
            // Redux State, like passwords.
            return _.omit(state, ['user.password']);
        },
    ],
  }
});
`}/>


### Sanitize Redux Actions

<Code language='javascript' title='Example Sanitizers' code={`
import _ from 'lodash'; // example dependency\n
wisdomAdmin('init', 7, {
  sanitizers: {
    reduxAction: [
        (action) => {
            // Ommit certain action properties from Redux, like passwords.
            // Remember to return a clone of the action.
            if (action.type === 'SET_USER_FULFILLED') {
                let actionClone = _.cloneDeep(action);
                _.set(actionClone, 'account.user.password', '__CENSORED__');
                _.set(actionClone, 'example.nested.deeply', '__CENSORED__');
                return actionClone;
            }
            return action;
        }
    ],
  }
});
`}/>
