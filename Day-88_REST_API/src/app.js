/*
- app.js k bas 2 kaam:
    -server create karna
    -server config karna
    
*/

const express = require("express")

const app = express()  // server create ho jata hai

const notes = [
    {
        title:"test title 1",
        description:"test description 1 "
    }
]

app.get('/',(req,res)=>{
    res.send("hello world")
})

// api method : POST , api name : /notes
// express by default request.body ka data padh hi nahi sakta
// so we use a middleware : express.json()

app.use(express.json())
// "POST /notes"
app.post("/notes",(req,res)=>{
    console.log(req.body)    
    notes.push(req.body)
    
    console.log(notes)
    res.send("note createdz")
})

// "GET /notes"

app.get("/notes",(req,res)=>{
    res.send(notes)
})

// "DELETE /notes"
// params
// delete /notes/indexnumber

app.delete("/notes/:index",(req,res)=>{
    // console.log(req.params.index);
    delete notes[ req.params.index ]
    
    res.send("note deleted successfully")
})// coln : tells that the value is not fixed and is dynamic

// PATCH /notes/:index
//req.body = data you wanna update : eg: {description :- "sample modified description"}


app.patch("/notes/:index",(req,res)=>{

    notes[ req.params.index ].description = req.body.description
    notes[ req.params.index ].title = req.body.title

    res.send("Notes updates successfully!") 

})

module.exports = app  // created server ko export kar diya hai