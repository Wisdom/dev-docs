
/*
    Lets have a little fun on the website.
 */
 const EMOJIES = ['🤩','🤨','🤔','😑','🙄','🤐','😫','🤤','😜','😭','🙃','😞','😵','🤪','🤓','💀','😀','😁','😂','🤣','😃','😄','😅','😆','😉','😊','😋','😎','😍','😘'];

 if (window.navigator && window.navigator.vendor === "Google Inc.") {
   const MSG = [37, 99, 10, 32, 32, 32, 32, 32, 95, 95, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 95, 95, 32, 32, 95, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 95, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 10, 32, 32, 32, 32, 32, 92, 32, 92, 32, 32, 32, 32, 32, 32, 32, 32, 47, 32, 47, 32, 40, 95, 41, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 124, 32, 124, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 10, 32, 32, 32, 32, 32, 32, 92, 32, 92, 32, 32, 47, 92, 32, 32, 47, 32, 47, 32, 32, 32, 95, 32, 32, 32, 95, 95, 95, 32, 32, 32, 32, 95, 95, 124, 32, 124, 32, 32, 32, 95, 95, 95, 32, 32, 32, 32, 95, 32, 95, 95, 32, 95, 95, 95, 32, 32, 32, 32, 32, 32, 32, 32, 32, 10, 32, 32, 32, 32, 32, 32, 32, 92, 32, 92, 47, 32, 32, 92, 47, 32, 47, 32, 32, 32, 124, 32, 124, 32, 47, 32, 95, 95, 124, 32, 32, 47, 32, 95, 96, 32, 124, 32, 32, 47, 32, 95, 32, 92, 32, 32, 124, 32, 39, 95, 32, 96, 32, 95, 32, 92, 32, 32, 32, 32, 32, 32, 32, 32, 10, 32, 32, 32, 32, 32, 32, 32, 32, 92, 32, 32, 47, 92, 32, 32, 47, 32, 32, 32, 32, 124, 32, 124, 32, 92, 95, 95, 32, 92, 32, 124, 32, 40, 95, 124, 32, 124, 32, 124, 32, 40, 95, 41, 32, 124, 32, 124, 32, 124, 32, 124, 32, 124, 32, 124, 32, 124, 32, 32, 32, 32, 32, 32, 32, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 92, 47, 32, 32, 92, 47, 32, 32, 32, 32, 32, 124, 95, 124, 32, 124, 95, 95, 95, 47, 32, 32, 92, 95, 95, 44, 95, 124, 32, 32, 92, 95, 95, 95, 47, 32, 32, 124, 95, 124, 32, 124, 95, 124, 32, 124, 95, 124, 32, 32, 32, 32, 32, 32, 32, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 46, 10, 32, 32, 32, 32, 32, 32, 32, 32, 87, 101, 98, 115, 105, 116, 101, 32, 118, 105, 115, 105, 116, 111, 114, 32, 115, 99, 114, 101, 101, 110, 115, 104, 97, 114, 105, 110, 103, 32, 38, 32, 114, 101, 99, 111, 114, 100, 105, 110, 103, 46, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 46].map(c => String.fromCodePoint(c)).join('');
 
   console.log(
     MSG,
     'display:block; color:white; background-color:#5b45b4; background:linear-gradient(90deg,#443285 0%,#5b45b4 12%, #5b45b4 25%,#715cc1 50%, #5b45b4 75%); padding:0px;  padding:0; font-weight:800; font-family:monospace; margin-bottom:0px; min-width:60%;'
   );
   console.log(
     '%cPsst! Want to speak to a dev? Email "Devs@GetWisdom.io" and we\'ll get back to you by email or video chat. 🤓',
     'color:#5b45b4; font-weight:800; font-family:monospace; margin-top: 10px; margin-bottom:0px; display: block;'
   );
 }
 
 
 document.addEventListener('click', function (evt) {
   if (evt.target.tagName === 'IMG') {
     const article = document.querySelector('article .markdown');
 
     if (article && article.contains(evt.target)) {
       evt.target.classList.toggle('expanded');
     }
   }
 });
 
 
 document.addEventListener('keydown', function (evt) {
   evt = evt || window.event;
   console.log('keypress', evt.keyCode, evt.key);
   if (evt.key === 'Escape' || evt.key === 'Esc' || evt.keyCode === 27) {
     Array.from(document.querySelectorAll('article .markdown img.expanded')).forEach(el => {
       el.classList.toggle('expanded');
     });
   }
 });
 
 
 
 
 function getRandEmoji() {
   return EMOJIES[ Math.random() * EMOJIES.length |0 ];
 }
 
 (function colorPurple (){
   const style = 'color:#5b45b4; font-weight:800;';
   const log = window.console.log;
   window.console.log  = (...args) => {
     if (args.length !== 1 || typeof args[0] !== 'string') {
       return log.call(window.console, ...args);
     }
     return log.call(window.console, '%c'+args[0] + ' '+ getRandEmoji(), style);
   }
 }())



try {
  document.body.className = 'has-js';
}
catch (e) {
  console.error(e);
}



setTimeout(function () {
  try {
    if (window.location.host === 'developers.getwisdom.io') {
      /* Wisdom */
      !function(W,I,S,D,O,M){"use strict";if(S.__WISDOM__ADMIN__INIT__OBJECT_REFERENCE=W,!(W in S)){var f=S[W]=
      function(){arguments.length&&f.q.push({args:arguments,ts:new Date})};f.ts=new Date,f.q=[]; var g=
      D.createElement("script");g.src="https://script.getwisdom.io/namespace/ADMIN/v"+(I|0),g.type="text/javascript",
      g.charset="UTF-8",g.crossOrigin="anonymous",g.async=!0;var h=D.getElementsByTagName("script")
      [0];h.parentNode.insertBefore(g,h)}}("wisdom",1,window,document,'ADMIN');
      wisdom('init', 7);
      if (window.fetch) {
        fetch('https://api.getwisdom.io/v1/user/self-public', {
          credentials: 'include'
        })
        .then(r=>r.json())
        .then(user => {
          wisdom('identify', user.email);
        })
        .catch(err=>console.error(err))
      }
      /* Intercom */
      (function(){var w=window;var ic=w.Intercom;if(typeof ic==="function"){ic('reattach_activator');ic('update',intercomSettings);}else{var d=document;var i=function(){i.c(arguments)};i.q=[];i.c=function(args){i.q.push(args)};w.Intercom=i;function l(){var s=d.createElement('script');s.type='text/javascript';s.async=true;s.src='https://widget.intercom.io/widget/btpqstsw';var x=d.getElementsByTagName('script')[0];x.parentNode.insertBefore(s,x);}if(w.attachEvent){w.attachEvent('onload',l);}else{w.addEventListener('load',l,false);}}})()
      window.Intercom("boot", {
        app_id: "btpqstsw"
      });
    }

  }
  catch (e) {console.error(e);}
}, 250);