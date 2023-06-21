// create a JS class to handle user methods
const dippiClient = require('./dippiClient');

const retrieve = async (id) => {
    const dippi = await dippiClient.init();
    return await dippi.applicationToken.retrieve(id);
}


module.exports = {
    retrieve
};