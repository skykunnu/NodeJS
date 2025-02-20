// In this we are connecting whole Express-server with mongoDB Database.

import express from "express";
import "dotenv/config";
import mongoose from "mongoose";

mongoose.connect(process.env.MONGO_URL);

const studentSchema = new mongoose.Schema({
  id: { type: Number, unique: true },
  name: { type: String },
  address: { type: String },
  course: { type: String },
});

const Student = mongoose.model("Student", studentSchema, "Students");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port = process.env.PORT; // we have used this becoz we are importing port No from .env file.

app.get("/", async (req, res) => {
  const students = await Student.find({});
  res.send(students);
});

app.post("/", async (req, res) => {
  const newData = req.body;

  const newStudent = new Student(newData);
  await newStudent.save();
  res.status(201).send({ message: "Student Added", newStudent: newStudent });
});

app.delete('/:id',async(req,res)=>{
    const idTodelete=Number(req.params.id);
  const DeletedStudent= await Student.findOneAndDelete({id:idTodelete});
if(!DeletedStudent){
    res.send({message:"Student Not found"});
}

  res.status(200).send({message:"Student Deleted", deletedStudent:DeletedStudent});
})

// app.put('/:id',(req,res)=>{

//   const body=req.body
//   const idToEdit=Number(req.params.id);
//   const Updateddata=data.map((dataItem)=>{ return dataItem.id===idToEdit?body:dataItem})
//   res.status(200).send(Updateddata);
// })

app.listen(port, () => {
  console.log("Server started at port" + port);
});
