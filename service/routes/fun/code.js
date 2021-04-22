//对比code是否存在*处理函数
const contrast = (req, res, next) => {
    res.send('对比成功');
}
module.exports = {
    contrast
};