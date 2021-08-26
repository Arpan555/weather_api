const  mongoose  = require("mongoose");
const History =require("../Models/History")
const historyData =async (req,res)=>{
        const {name}=req.params
        console.log(name)
    try {

        const allHistoryData= await History.find({name:name})
        res.status(200).json(allHistoryData)

    } catch (error) {
        res.status(404).json({message:error.message})
     }
}
module.exports={historyData}