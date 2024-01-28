const mongoose=require("mongoose");

const userLoginSchema = new mongoose.Schema({
    loginInput:{type:String,
    required:true},
    loginPwd:{
        type:String,
        required:true
    }
})


const UserLogin =mongoose.model("UserLogin",userLoginSchema);


module.exports ={
    UserLogin
}