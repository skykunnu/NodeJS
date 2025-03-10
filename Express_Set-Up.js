import express from "express"

const app=express(); // This express function contains everything that express has to offer. 



// routes- leftout part after domain is routes. 

// get route means to get the data.
app.get("/", function(req,res){ // "/"- it is default path. 
    res.send("Hello world")
})

app.listen(3000,()=>{
    console.log("Server is started at 3000")
})