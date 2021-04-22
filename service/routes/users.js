const express = require('express');
const router = express.Router();
//登录接口
const login = (req, res, next) => {
  res.send('登录成功');
}
router.get('/login', login);
module.exports = router;
