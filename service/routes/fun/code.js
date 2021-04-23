//对比code是否存在*处理函数
const contrast = (req, res, next) => {
    res.json({
        code:0,
        data:true,
        state:'code对比一致'
    });
}
module.exports = {
    contrast
};