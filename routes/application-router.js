const express = require ('express');
const router = express.Router();
const application = require('../libs/application');

router.get('/list', async (req, res) => {
    
    const response = await application.list();
    res.send({status:200, message: "ok" , response: response })
    
});

router.post('/create', async (req, res) => {
    
    const response = await application.create(req.body);
    res.send({status:200, message: "ok" , response: response })
    
});

router.get('/retrieve/:id', async (req, res) => {
    
    const response = await application.retrieve(req.params.id ,req.body);
    res.send({status:200, message: "ok" , response: response })
    
});

router.put('/update/:id', async (req, res) => {
    
    const response = await application.update(req.params.id ,req.body);
    res.send({status:200, message: "ok" , response: response })
    
});

module.exports = router;