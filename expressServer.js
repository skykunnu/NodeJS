import express from "express"
import "dotenv/config"
// process is a ever-running process. 

const app=express()
app.use(express.json());
app.use(express.urlencoded({extended:true}))

const port=process.env.port
const data=[
    {id:1,name:'Shikhar'},
    {id:2,name:'Rishi'},
    {id:3,name:'Ranveer'},
    {id:4,name:'Harry'},
    
]

app.get("/",(req,res)=>{
res.status(200).send(data)
});

app.post('/',(re,res)=>{
    const newData=req.body;
    data.push(newData)
    res.status(201).send(data)

})

app.listen(port,()=>{
    console.log("Server started at port"+port);
})