var mongoose = require('mongoose');
var plm = require('passport-local-mongoose');
   
mongoose.connect('mongodb://127.0.0.1:27017/instadata')

var userSchema = mongoose.Schema({
  name:String,
  // profileimg:[] ,   
  username:String,
  password:String,  
  email:String,   
  post:[{type:mongoose.Schema.Types.ObjectId,ref:"post"}],
  profileimg:Object,
  bio : {
    
    type:String

  },
  online:{
    type:String,
    default:"0"
  },
  follower :[{  type : mongoose.Schema.Types.ObjectId , ref : 'user'}],
  following : [{  type : mongoose.Schema.Types.ObjectId , ref : 'user'}],
  story:[{type:mongoose.Schema.Types.ObjectId,ref:"story"}]
})


userSchema.plugin(plm);
module.exports = mongoose.model('user',userSchema)
