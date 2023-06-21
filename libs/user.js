// create a JS class to handle user methods
const dippiClient = require('./dippiClient');

const getProfile = async () => {
    const dippi = await dippiClient.init();
    return await dippi.user.getProfile();
}

const updateProfile = async (data) => {
    const dippi = await dippiClient.init();
    return await dippi.user.updateProfile(data);
}

module.exports = {
    getProfile,
    updateProfile
};