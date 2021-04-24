const User = require('../../Models/users');
//登录*处理函数
const login = (req, res, next) => {
    User.findOne(req.body,(err,data)=>{
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
                    message:'登陆成功'
                });
            }else{
                res.json({
                    code:-1,
                    data:false,
                    message:'账号或密码错误，请重试！！！'
                });
            }
        }
    })
}
module.exports = {
    login
}