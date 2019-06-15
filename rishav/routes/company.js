const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const bcryptjs=require('bcryptjs');
const multer = require('multer');

const storage = multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,'./uploads/');
    },
    filename:function(req,file,cb){
        cb(null,file.originalname);
    }
});

const fileFilter = function(req,file,cb){
    if(file.mimetype==='image/jpeg'||file.mimetype==='image/png'){
        cb(null,true);
    }else{
        cb(null,false);
    }
};

const upload=multer({
    storage:storage,
    fileFilter:fileFilter
});

const advcompanymodel=require('../models/advcompanymodel');

router.get('/',function(req,res){
    //res.send("Product's Name").status(200);
    advcompanymodel.find()
    .exec()
    .then((company)=>{
        //res.json(product).status(200);
        //res.render('saamaan',{products:product});
        company.forEach((item)=>{
            console.log(item);         
        });
    });
});

router.post('/',upload.single('profileImage'),function(req,res){
    console.log(req.file);
    const newCompany=new advcompanymodel({
        image:req.file.path
    });

    advcompanymodel.find({name:req.body.name})
    .exec()
    .then((company)=>{
        if(company.length>0)
        res.send(" already present").status(404);
        else{
            // newProduct.save(function(err){
            //     if(err)
            //     res.send("Not able to save").status(404);
            //     else
            //     res.send("Product added").status(201);
            // });

            newCompany.save(function(err,product){
                if(err)
                res.json(err).status(404);
                else
                res.json(company).status(201);
            });
        }
    });
});

router.get('/company',function(req,res){
    const id=req.params.company;
    advcompanymodel.findById(id)
    .exec()
    .then((company)=>{
        res.json(company).status(200);
    });
});

router.delete('/company
',function(req,res){
    const id=req.params.company;
    Model.deleteOne({_id:id})
    .exec()
    .then((data)=>{
        res.json(data).status(200);
    })
    .catch((err)=>{
        res.json(err).status(404);
    })
});
module.exports = router;