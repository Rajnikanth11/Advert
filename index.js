const express= require('express');
const app=express();
const morgan=require('morgan');

const port=4000;
let count=0;
 
const mongoose=require('mongoose');



const users=require('./routes/users');
const contentWriter=require('./routes/contentWriter');
const company=require('./routes/company');
const parser=require('body-parser');

  
mongoose.connect("mongodb+srv://gabbar329:municipality@cluster0-718ce.mongodb.net/test?retryWrites=true",function(err){

if(err){
    console.log(err);
}
else{
    console.log("Atlas Connected");
}


});


// app.get('/',function(req,res){

// res.send("Hello World1");


// });

/*app.get('*',function(req,res,next){
    count++;
        next();    
        
        });

app.get('/test',function(req,res){
    res.send("Hello World2").status(200);
})

app.get('/count',function(req,res){
    res.send(count.toString()).status(200);
})
*/
app.use(morgan('dev'));
app.use(parser.json());
app.use(parser.urlencoded({extended:true}));


app.use('*',function(req,res,next){
    res.set('Access-Control-Allow-Origin','*');
    res.set('Access-Control-Allow-Headers','content-type');

        next();    
        
        });



app.use('/users',users);
app.use('/contentWriter',contentWriter);
app.use('/company',company);





app.listen(port,function(){
    console.log("Server listening on port "+port);
});


