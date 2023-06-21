const express = require ('express');
const router = express.Router();
const auth = require('../libs/auth');

router.post('/login', async (req, res) => {
    
    const response = await auth.login(req.body);
    res.send({status:200, message: "ok" , response: response })
    
});

module.exports = router;