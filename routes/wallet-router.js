const express = require ('express');
const router = express.Router();
const wallet = require('../libs/wallet');

router.get('/list', async (req, res) => {
    result = await wallet.list();
    res.send({status:200, message: "ok" , response: result })
});

router.get('/retrieve', async (req, res) => {
    result = await wallet.retrieve(req.body.id);
    res.send({status:200, message: "ok" , response: result })
});

router.put('/update/:id', async (req, res) => {
    result = await wallet.update(req.params.id , req.body);
    res.send({status:200, message: "ok" , response: result })
});


router.post('/recovery/:id', async (req, res) => {
    console.log(req.params.id , req.body)
    result = await wallet.recovery(req.params.id, req.body);
    res.send({status:200, message: "ok" , response: result })
});

router.get('/balance/:id', async (req, res) => {
    result = await wallet.balance(req.params.id);
    res.send({status:200, message: "ok" , response: result })
});

router.get('/nfts/:id', async (req, res) => {
    result = await wallet.nfts(req.params.id);
    res.send({status:200, message: "ok" , response: result })
});

module.exports = router;