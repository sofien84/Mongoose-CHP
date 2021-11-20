const  express= require('express')
const Contact =require('../model/Contact')
const router=express.Router()
// api  test
router.get('/test',( req,res) =>{
    res.send('test router')
})

//add users
router.post('/adduser', (req,res)=>{
    const{name,email,phone}=req.body
    const user= new Contact({name,email,phone})
    user.save()
       .then(user=>res.send({"user": user}))
       .catch(error=>console.log(error))

    })

    //get user
router.get('/getuser',(req,res)=>{
    Contact.find()
           .then(user=>res.send({"users": user}))
           .catch(error=>console.log(error))
        
    })


//edit user
router.put('/edituser/:_id',(req,res)=>{
    const{_id}=req.params
    const{email, name,phone}=req.body
    Contact.findByIdAndUpdate({_id},{$set:{email,name,phone}})
           .then(user=>res.send({"usermodified": user}))
           .catch(error=>console.log(error))
    })


    //delete user
    router.delete('/deleteuser/:_id',(req,res)=>{
    const{_id}=req.params
    Contact.findByIdAndDelete({_id})
           .then(user=>res.send({"user has been delete": user}))
           .catch(error=>console.log(error))
    })
    
    // find() by name
    router.get('/search',(req,res)=>{
        Contact.find({name:"kais"})
        .then (users=>res.send({"users'name kais": users}))
        .catch(err=>{console.log(err)})
    })
    // findone() by name
    router.get('/searchone',(req,res)=>{
        Contact.findOne({name:"kais"})
        .then (users=>res.send({"users'name kais": users}))
        .catch(err=>{console.log(err)})
    })
    // find By Id() 
    router.get('/searchid',(req,res)=>{
        
        Contact.findById({_id:"6193eff9077ec73e894da791"})
        .then(user=>res.send({"user avec Id:6193eff9077ec73e894da791 is":user}))
        .catch(err=>console.log(err))
    })
    // remove 
    router.delete('/remove',(req,res)=>{
        
        Contact.remove({name:{$regex:"j"}})
        .then(users=>{res.send({"removed users":users})})
        .catch(err=>console.log(err))
    })
    //  Search Query  :sorted by name 
    router.get('/Sorted',(req,res)=>{
        Contact.find().sort("name").limit(3).select(["name","email"] )
        .then(users=>res.send({"Sorted  list": users}) )
        .catch(err=>{console.log(err)})
    })
    
       


module.exports=router