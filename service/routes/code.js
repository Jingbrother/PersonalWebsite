const express = require('express');
const router = express.Router();
//对比code是否存在
const contrast = (req, res, next) => {
    res.send('对比成功');
}
router.post('/contrast', contrast);
module.exports = router;