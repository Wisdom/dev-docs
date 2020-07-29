import React from 'react';
import Layout from '@theme/Layout';



const innerHTML = `
<html>
<head>
  <title>ReDoc</title>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <link
    href="https://fonts.googleapis.com/css?family=Montserrat:300,400,700|Roboto:300,400,700"
    rel="stylesheet"
  />
  <style>
    body {
      margin: 0;
      padding: 0;
    }
  </style>
</head>
<body>
<redoc spec-url="/redoc/main-api.json"></redoc>
<script src="https://cdn.jsdelivr.net/npm/redoc@next/bundles/redoc.standalone.js"></script>
</body>
</html>
`;

function RedocWrapper() {
    return (
      <Layout
        title={`API`}
        description={`Wisdom's API documentation.`}>
        <iframe srcdoc={innerHTML} style={{
            height: '100vh',
            width: '100vw',
            border: 'none',
            outline: 'none',
        }}>
        </iframe>
      </Layout>
    );
  }
  
  export default RedocWrapper;