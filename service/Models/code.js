const mongoose = require('mongoose');
var Schema = mongoose.Schema;
// 声明一个数据集 对象
var codeSchema = new Schema({
    _id: Number,
    best:Number,
    ten:Number,
    a:Number
});
// 将数据模型暴露出去
module.exports = mongoose.model('codes', codeSchema);
