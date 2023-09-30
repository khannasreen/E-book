const express = require ('express');
const Model = require ('../models/userModels')
const router = express.Router();


router.get('/add', (req, res) => {
    res.send('respond from index2 add');
    console.log(req.body);
});

module.exports = router;
