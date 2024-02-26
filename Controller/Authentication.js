const AdminReg = require("../modal/adminauth");
const bcrypt = require("bcrypt")

const adminRegister = async(req,res) =>{
    const data = req.body;
     const findemail = await AdminReg.findOne({email:data.email});

     if(findemail){
        return res.status(409).json({msg:"Already registered"})
     }

     const hashpassword = bcrypt.hashSync(data.password,10);
     const obj = {...data,password:hashpassword}

     await AdminReg.create(obj);
     return res.status(201).json({msg:"Admin is successfully registered"})
}

const adminlogin = async(req,res)=>{
    const {email,password} = req.body;
    const checkEmail = await AdminReg.findOne({email:email});

    if(checkEmail && bcrypt.compare(password,checkEmail.password)){
        const jwt  = require("jsonwebtoken");
        const accessToken = jwt.sign({
            user:{
                username:checkEmail.username,
                email:checkEmail.email,
                id:checkEmail.id
            }
        },process.env.Secret_Key,{expiresIn:"1d"}) ;
         
        return res.status(201).json({msg:"logged In",accessToken:accessToken,username:checkEmail.username});
    }
    return res.status(403).json({msg:"Email or Password is wrong"});
}

module.exports = {adminRegister,adminlogin}