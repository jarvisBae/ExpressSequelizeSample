var express = require('express');
var router = express.Router();
var { User } = require('../models/index');

/* GET users listing. */
router.get('/', async (req, res) => {
  const users = await User.findAll()
  const result = []

  for (const user of users) {
    result.push({
      email: user.useremail,
      name: user.name,
      password: user.password
    })
  }

  res.send(result)
})

module.exports = router;
