const mongoose = require('mongoose');

const advcompanySchema = mongoose.Schema({
    img: 
      {  
        type: String,
        require:true
     },
});


const advcompanySchema = model.exports  = mongoose.model('advcompany',advcompanySchema);
