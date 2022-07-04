const express = require("express")
const app = express()


app.get('/server',(req,res)=>{
    res.send('Server')
})
app.listen(5000,()=>{
    console.log('Server on port 5000')
})