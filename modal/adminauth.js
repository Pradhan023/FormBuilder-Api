const mongo = require('mongoose');

const AdminSchema = mongo.Schema({
    username:{
        type:String,
        required:[true,"Username is needed"]
    },
    email:{
        type:String,
        required:[true,"Email is required"],
        unique:true
    },
    password:{
        type:String,
        required:[true,"Password is required"]
    }
})

const AdminReg = mongo.model("AdminRegister",AdminSchema)

module.exports = AdminReg