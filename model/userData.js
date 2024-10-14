const mongoose=require("mongoose");
//create the schema
const userSchema=mongoose.Schema({
    
    username:String,
    password:String,  
    phone:String,
    

})
const userData=mongoose.model('user',userSchema);
module.exports=userData;