const express = require("express")

const app = express()

app.use(express.json())

const notes = []
// POST /notes
app.post("/notes",(req,res)=>{
    notes.push(req.body)

    res.status(201).json({
        message:"Note created successfully!"
    })
})

// GET /notes*/  : api ka sara data client side pe pahoch jayega
app.get('/notes',(req,res)=>{ // NOte: api ka response humesha json format me jayega ith station code yaad rakhna koi v method create karo sabme
    res.status(200).json({
        notes: notes // status codes 200,201 sabe bare me padhna from ppt to understand what they means.
    })
})

//DELETE /notes:index*/ 
app.delete('/notes/:mama',(req,res)=>{
    delete notes[req.params.mama]

    res.status(204).json({
        message:"Note Deleted Successfully!"
    })    
})

//PATCH /notes/:index */
app.patch('/notes/:index',(req,res)=>{
    notes[req.params.index].description = req.body.description

    res.status(200).json({
        message:"Note Updated Successfully!"
    })
})

// problem: jabhi v server restart hota h sare nodes gayab ho jate h !


module.exports = app



// 53:15 mins continue from tommorrow.
// cmd terminal : rs means server restart
// Cluster = Storage + Ram
