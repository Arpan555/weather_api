const express=require("express")
const bodyParser=require("body-parser")
const mongoose=require("mongoose")
const cors=require("cors")
const reg_router=require("./Routes/register")
const app=express()
app.use(bodyParser.json())
app.use(cors())
app.use(reg_router)
const URL="mongodb://localhost:27017/weather-api"
const port=8000

mongoose.connect(URL,{useNewUrlParser: true, useUnifiedTopology: true })
.then(()=>app.listen(port,()=>console.log(`server running on ${port}`)))
.catch((error)=>console.log(`${error} didnot connect`))

mongoose.set("useFindAndModify",false)
