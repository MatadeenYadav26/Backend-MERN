/*
- is file ka main kaam hai server ko start karna
*/ 

// server ko import / use kar rhe hai

const app = require("./src/app")

app.listen(3000,()=>{
    console.log("server is running on port 3000");
    
})