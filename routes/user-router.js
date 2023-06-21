const express = require ('express');
const router = express.Router();
const user = require('../libs/user');

router.put('/updateProfile', async (req, res) => {
    
    const response = await user.updateProfile(req.body);
    res.send({status:200, message: "ok" , response: response })
    
});

router.get('/getProfile', async (req, res) => {

    const userProfile = await user.getProfile();
    res.send({'status':200, 'userProfile': userProfile})
  
});

module.exports = router;