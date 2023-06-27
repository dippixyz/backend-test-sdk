# Backend to test Dippi SDK

This backend is used to test the SDK, as if an external user wanted to use it.

## Installation

0. Clone repo
   
```
git clone https://github.com/dippixyz/backend-test-sdk.git
```

1. Install dependencies
   
```bash
cd backend-test-sdk
npm install 
```

2. Install Dippi SDK

```bash
npm i @dippixyz/sdk
```

4. Create a .env file

To get the APP_TOKEN and the APP_ID first register at https://client.dippi.xyz and create a new project.

The Client URL = https://api.dippi.xyz

```bash
APP_TOKEN=<YOUR_APP_TOKEN>
APP_ID=<YOUR_APP_ID>
CLIENT_URL=https://api.dippi.xyz
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

