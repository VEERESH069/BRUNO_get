const express = require('express')
const app = express()
const port = 3001

app.get('/ping',(req,res)=>{
res.send("Pong --> and server working perfectly")
})

app.listen(port,(req,res)=>{
    console.log(`Server is running on ${port}`)
})
