const Dippi = require('@dippixyz/sdk');
require('dotenv').config();

class DippiClient {

    constructor() {
        this.client = new Dippi({
            appToken: process.env.APP_TOKEN,
            appId: process.env.APP_ID,
            url: process.env.CLIENT_URL,
        });
    }

    async init() {
        const { accessToken } = await this.client.auth.login();
        this.client.setAuthToken(accessToken);
        return this.client;
    }
}

module.exports = new DippiClient();
