const express = require('express')

const app = express()  // express me itti capability nhi hoti k vo backend ka data drct read krle

app.use(express.json()) // ye ek middleware h : middle ware in future classes // so we need to use app.use to help express so that i can read the data sent from backend from req.body


const notes = []

app.post("/notes",(req,res)=>{
    console.log(req.body)

    notes.push(req.body)
    
    res.send('note created');
})

app.get("/notes",(req,res)=>{
    res.send(notes)
})

app.listen(3000,()=>{
    console.log("Server is running on port 3000");
    
})