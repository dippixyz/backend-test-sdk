# Dippi SDK for JS

This is the Dippi SDK for JavaScript. It is a wrapper around the Dippi API.

## Installation

1. Clone the SDK repo in the same path as your project.

Example:

```bash
/home/user/myProject
/home/user/dippi-sdk-js
```

2. Install dependencies
```bash
npm install 
```
3. Create a .env file

To get the APP_TOKEN and the APP_ID first register at https://client.dev.dippi.xyz and create a new project.

```bash
APP_TOKEN=ciOiJIUzI1NiIsInR5
APP_ID=casdasdsd3qx1bh881u8d9
CLIENT_URL=https://api.dev.dippi.xyz
```


## Start
```bash
npm start 
```

## Open Postman and test endpoint

Example :

``` 
GET : http://localhost:3000/dippi/user/getProfile
PUT : http://localhost:3000/dippi/user/updateProfile
    Body: x-www-form-urlencoded 
    Params: 
        firstName : "My name"
        .... 

```

