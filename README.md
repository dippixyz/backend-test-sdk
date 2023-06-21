# Backend to test Dippi SDK

This backend is used to test the SDK, as if an external user wanted to use it.

## Installation

0. Clone SDK Repo and this backend repo.
   
```
git clone https://github.com/dippixyz/backend-test-sdk.git
```

```
git clone https://github.com/dippixyz/dippi-sdk-js.git
```

2. Clone the SDK repo in the same path as your project.

Example:

```bash
/home/user/backend-test-sdk
/home/user/dippi-sdk-js
```

2. Install dependencies
   
```bash
cd /home/user/backend-test-sdk
npm install 
```
The SDK is not necessary to install anything, just clone the repository.

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

