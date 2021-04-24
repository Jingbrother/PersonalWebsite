const Code = require('../../Models/code');
//对比code是否存在*处理函数
const contrast = (req, res) => {
    Code.findOne(req.body,(err,data)=>{
        if(err){
            res.json({
                code:-1,
                data:false,
                message:err
            });
        }else{
            if(data){
                res.json({
                    code:0,
                    data:true,
                    message:'code对比通过'
                });
            }else{
                res.json({
                    code:-1,
                    data:false,
                    message:'code对比未通过，请联系管理员！！！'
                });
            }
        }
    })
}
module.exports = {
    contrast
};