import express from "express";
import "dotenv/config";
import mongoose  from "mongoose"

//database connections
mongoose.connect(process.env.MONGO_URL)

// process is a ever-running process.

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port = process.env.PORT; // we have used this becoz we are importing port No from .env file. 
console.log(port);

// const data = [
//   { id: 1, name: "Shikhar" },
//   { id: 2, name: "Rishi" },
//   { id: 3, name: "Ranveer" },
//   { id: 4, name: "Harry" },
// ];

app.get("/", (req, res) => {
  res.status(200).send(data);
});

app.post("/", (req, res) => {
  const newData = req.body;
  data.push(newData);
  res.status(201).send(data);
});

app.delete('/:id',(req,res)=>{
  const id=Number(req.params.id);
  const filterData=data.filter((dataItem)=>dataItem.id!==id);
  res.status(200).send(filterData);
})

app.put('/:id',(req,res)=>{

  const body=req.body
  const idToEdit=Number(req.params.id);
  const Updateddata=data.map((dataItem)=>{ return dataItem.id===idToEdit?body:dataItem})
  res.status(200).send(Updateddata);
})





app.listen(port, () => {
  console.log("Server started at port" + port);
});
