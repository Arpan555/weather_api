const express=require("express")
const {historyData}=require("../Controllers/history.js")
const history_router=express.Router()

history_router.get("/history",historyData)

module.exports=history_router 