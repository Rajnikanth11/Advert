const mongoose = require('mongoose');

const advcompanySchema = mongoose.Schema({
    img: 
      { data: Buffer, 
        contentType: String,
        require:true
     },
     bidprice:
     {
         type:Number,
         require:true
     }

  
});


const advcompanySchema = model.exports  = mongoose.model('advcompany',advcompanySchema);
