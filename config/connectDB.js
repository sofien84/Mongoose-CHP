const mongoose=require('mongoose')
const config=require('config')
const connectDB=()=>{
try{
    mongoose.connect(config.get("MONGO_URI"))
    console.log("The database is already connected")
}
catch(error){
    console.log(error)
}
}
module.exports=connectDB