---
title: Authentication
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


# Authentication


Authentication to Wisdom's HTTP REST API generally requires one of two methods.
1. Utilizes JSON Web Tokens (JWTs). All authenticated API endpoints require the HTTP header `Authorization` with the value `bearer <__YOUR_JWT_HERE__>`. Tokens are valid for one hour.
2. Utilize Application level API (secret) Keys


### Generate Token (valid for one hour)
HTTP `POST https://api.getwisdom.io/v1/auth/login/jwt`
- Requires parameter `email`
- Requires parameter `password`
- Success returns `{token: __YOUR_JWT_HERE__}`

### Example: Get current user data
HTTP `GET  https://api.getwisdom.io/v1/user/self`. Requires _one_ of:
1. HTTP header `Authorization: bearer __YOUR_JWT_HERE__`
2. Query parameter `apiSecretToken` (you can get this from your project's [API config page](https://app.getwisdom.io/org/~/project/~/configs/api-access).

- Success returns JSON

