const mongoose = require('mongoose');

const ContainwriterSchema = mongoose.Schema({
  content :{
    type:string,
    require:true
    },
  basebid :{
    type:number,
    require:true
  },






});


const Contentwriter = model.exports  = mongoose.model('contentwriter',ContentwriterSchema);
