const express = require ('express');
const router = express.Router();
const applicationToken = require('../libs/application-token');


router.get('/retrieve/:id', async (req, res) => {
    const response = await applicationToken.retrieve(req.params.id, req.body);
    res.send({status:200, message: "ok" , response: response })
});

module.exports = router;