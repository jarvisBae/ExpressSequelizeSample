var express = require('express');
var router = express.Router();

var { User } = require('../models/index');
let jwt = require("jsonwebtoken");
let secretObj = require("../config/jwt");

router.post('/signin', function(req, res, next) {

    let token = jwt.sign({
        email: req.body.email//payload
    },
    secretObj.secret,//키
    {
        expiresIn: '60m'//유효시간
    })

    User.findOne({
        where: {
            useremail: req.body.email
        }
    })
    .then( user => {
        if (user.password === req.body.password) {
            res.json({
                token: token
            })
        }
    })

});

module.exports = router;
