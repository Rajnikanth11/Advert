const mongoose = require('mongoose');

//User Schema
const UserSchema = mongoose.Schema({
  name :{
    type: string,
    require: true
  },
  email :{
    type: string,
    require: true
  },
  usertype :{
    type: string,
    require: true
  },
  password :{
    type: string,
    require: true
  },
});

const User = model.exports  = mongoose.model('User',UserSchema)
