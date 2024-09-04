const mongoose = require('mongoose');
const selfSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,'name is required']
    },
    age:{
        type:Number
    },
    mno:{
        type:Number
    },
    address:{
        type:String
    }
});
module.exports = new mongoose.model('person',selfSchema);