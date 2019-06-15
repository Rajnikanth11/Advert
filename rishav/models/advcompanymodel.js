const mongoose = require('mongoose');

const advcompanySchema = mongoose.Schema({
    img: 
<<<<<<< HEAD
      {  
        type: String,
        require:true
     },
=======
      { data: Buffer, 
        contentType: String,
        require:true
     },
     bidprice:
     {
         type:Number,
         require:true
     }

  
>>>>>>> 8df7f29bfb8fe4546b765ff03066f72c386f604b
});


const advcompanySchema = model.exports  = mongoose.model('advcompany',advcompanySchema);
