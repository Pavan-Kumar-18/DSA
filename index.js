const express = require('express')

const app = express()
const jobs = []

app.post("/job",async(req, res)=>{

    try{
      const{title, company, salary} = req.body
      if(!title || !company || !salary){
        return res.status(400).json({message:"Please Provide all valid details"})
      }
        console.alee0qnwinw
      jobs.push({title, company, salary})
     
      return res.status(200).json({message:"Successfully created jobs"})
    }catch(err){
        console.log(err)
    }

})


app.listen(5000, ()=>{
    console.log("Connected to backend")
      process.exit(0);
})