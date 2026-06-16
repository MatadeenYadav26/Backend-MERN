const express = require("express")

const app = express() //server instance create karna

// request , respond setup karna to "Hello World"
app.get('/',(req,res)=>{ // fat arrow function
    res.send("Hello World")
})

app.get('/about',function(req,res){ // normal function
    res.send("This is about page")
})

app.get('/home',function(req,res){
    res.send("This is Home page!")
})


app.listen(3000) // server start karta hai 

// for Deployment we used "Render.com"
