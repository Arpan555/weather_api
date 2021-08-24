const express=require("express")
const {signup,signin}=require("../Controllers/register.js")
const reg_router=express.Router()

reg_router.post("/signup",signup)
reg_router.post("/login",signin)

module.exports=reg_router 