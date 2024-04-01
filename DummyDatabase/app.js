const express = require('express');
const app = express();
const hackathonsData = require('./hackathon.json');
const contestsData = require('./contest.json');
const hiringsData = require('./hiring.json');
const data = require('./all.json');



app.get("/",(req,res)=>{
    res.send(JSON.stringify(data));
})

// app.get("/contest",(req,res)=>{
//     const data = contestsData
//     res.send(JSON.stringify(data));
// })

// app.get("/hackathon",(req,res)=>{
//     const data = hackathonsData
//     res.send(JSON.stringify(data));
// })

// app.get("/hiring",(req,res)=>{
//     const data = hiringsData
//     res.send(JSON.stringify(data));
// })

app.listen(3001,()=>{
    console.log("Server Running on Port 3001");
})