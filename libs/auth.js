// create a JS class to handle user methods
const dippiClient = require('./dippiClient');

const login = async () => {
    const dippi = await dippiClient.init();
    return await dippi.auth.login();
}

module.exports = {
    login,
};