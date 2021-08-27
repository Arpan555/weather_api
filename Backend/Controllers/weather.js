const axios=require("axios").default
const History=require("../Models/History")
const ROOT_URL="https://api.openweathermap.org/data/2.5/weather"
const API_KEY="4a9cb8711d4f0a56ca3de261d2d6fe94"

const fetchweather =async (req,res)=>{
    const {q,name}=req.query
    const date=new Date().toDateString()
    const time=new Date().toTimeString()
    const url=ROOT_URL+`?q=${q}&appid=${API_KEY}`
    try {
        const fetchData= await axios.get(`${url}`)
        const jsonData=JSON.stringify(fetchData.data)
        const objData=fetchData.data
        const history=new History({
            name:name,date,time,data:jsonData
          })
        await history.save()
        res.status(200).json(objData)
    
    } catch (error) {
        res.status(500).send({message:error})
     }
}
const fetchweatherLL=async (req,res)=>{
    const {lon,lat}=req.query
    const url1=ROOT_URL+`?lat=${lat}&lon=${lon}&appid=${API_KEY}`
        try {
            const fetchDataLL= await axios.get(`${url1}`)
            res.status(200).json(fetchDataLL.data)
        }catch (error) {
            res.status(500).send({message:error})
         }
    }
    
const fetchweatherCurCity=async (req,res)=>{
    const {city}=req.query
    const url2=ROOT_URL+`?q=${city}&appid=${API_KEY}`
    try {
        const defCityData=await axios.get(`${url2}`)
        res.status(200).json(defCityData.data)
    } catch (error) {
        res.status(500).send({message:error})
    }

}
module.exports={fetchweather,fetchweatherLL,fetchweatherCurCity}
