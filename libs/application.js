// create a JS class to handle user methods
const dippiClient = require('./dippiClient');

const list = async () => {
    const dippi = await dippiClient.init();
    return await dippi.application.list();
}

const create = async (data) => {
    const dippi = await dippiClient.init();
    return await dippi.application.create(data);
}

const retrieve = async (id) => {
    const dippi = await dippiClient.init();
    return await dippi.application.retrieve(id);
}

const update = async (id, data) => {
    const dippi = await dippiClient.init();
    return await dippi.application.update(id, data);
}


module.exports = {
    list,
    create,
    retrieve,
    update
};