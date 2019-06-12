const express= require('express');

const route=express.Router(); 

const mongoose=require('mongoose');

const userModel=require('../models/userModel');
//const bcryptjs=require('bcryptjs');

route.get('/',function(req,res){

    res.send("Users Home").status(200);
})

route.post('/',function(req,res){
//console.log(req.body);
//res.json(req.body).status(200);

const newUser= new userModel(
    {
        _id:new mongoose.Types.ObjectId(),
        name:req.body.name,
        email:req.body.email,
        //password:bcryptjs.hashSync(req.body.password,10)
    }
);

userModel.find({email:req.body.email})
.exec()
.then(users=>{
    if(users.length>0)
{
    res.send("Account already Exists").status(400);
}
else{
    newUser.save();
    res.send("Account Created").status(201);
}

})


});


module.exports= route;