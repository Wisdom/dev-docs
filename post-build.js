const fs = require('fs');
let html = fs.readFileSync(__dirname+'/build/index.html').toString();

const banner = `<head>\n<!--

    __          ___         _
    \\ \\        / (_)       | |
     \\ \\  /\\  / / _ ___  __| | ___  _ __ ___
      \\ \\/  \\/ / | / __|/ _\` |/ _ \\| '_ \` _ \\
       \\  /\\  /  | \\__ \\ (_| | (_) | | | | | |
        \\/  \\/   |_|___/\\__,_|\\___/|_| |_| |_|


  Dev Docs
-->`;

html = html.replace(/<head>/, banner);
html = html.replace(/<\/head>/, `<meta name="theme-color" content="#5b45b4">\n<\/head>`);
html = html.replace(/<body>/, `<body class="no-js">`);

fs.writeFileSync(__dirname+'/build/index.html', html);