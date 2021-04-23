//登录*处理函数
const login = (req, res, next) => {
    res.json({
        code:0,
        data:true,
        state:'登录成功'
    });
}
module.exports = {
    login
}