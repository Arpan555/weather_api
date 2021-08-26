const mongoose = require("mongoose");
const historySchema = mongoose.Schema({
  name:{
      type:String,
      required:true
  },
  date:{
      type: Date,
      required:true
    },
  time: {
       type: String, 
       required: true
    },
  data:{
      type:String,
      required:true
}
});

var History = mongoose.model("History", historySchema);

module.exports = History;
