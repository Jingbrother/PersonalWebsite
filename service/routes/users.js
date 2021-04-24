const express = require('express');
const router = express.Router();
const Fun = require('./fun/users')
//登录*接口
router.post('/login', Fun.login);
module.exports = router;
