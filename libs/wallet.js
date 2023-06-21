// create a JS class to handle user methods
const dippiClient = require('./dippiClient');

const list = async () => {
    const dippi = await dippiClient.init();
    return await dippi.wallet.list()
}

const retrieve = async (id) => {
    const dippi = await dippiClient.init();
    return await dippi.wallet.retrieve(id)
}

const update = async (id, data) => {
    const dippi = await dippiClient.init();
    return await dippi.wallet.update(id, data)
}

const recovery = async (id, data) => {
    const dippi = await dippiClient.init();
    return await dippi.wallet.recovery(id, data)
}

const balance = async (id) => {
    const dippi = await dippiClient.init();
    return await dippi.wallet.balance(id)
}

const nfts = async (id) => {
    const dippi = await dippiClient.init();
    return await dippi.wallet.nfts(id)
}


module.exports = {
    list,
    retrieve,
    update,
    recovery,
    balance,
    nfts
};