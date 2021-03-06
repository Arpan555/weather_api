const mongoose = require("mongoose");
const loginSchema = mongoose.Schema({
  email: { 
      type: String, 
      required: true 
    },
  date:{
      type: Date,
      required:true
    },
  time: {
       type: String, 
       required: true
    }
});

var Log = mongoose.model("login", loginSchema);

module.exports = Log;
