const mongoose = require("mongoose");
const registerSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: { 
      type: String, 
      required: true 
    },
  city:{
      type: String,
      required:true
    },
  password: {
       type: String, 
       required: true
    },
 id: { type: String }
});

var register = mongoose.model("register", registerSchema);

module.exports = register;
