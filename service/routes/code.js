const express = require('express');
const router = express.Router();
const Fun = require('./fun/code')
//对比code是否存在*接口
router.post('/contrast', Fun.contrast);
module.exports = router;