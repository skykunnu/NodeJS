import fs from "fs"

// 3 ways to create a file -> fs.writeFile(), fs.open(), fs.appendFile() 

// ⁡⁣⁣⁢fs.writeFile()-> It is used to write data to a file. If the file already exists, it overwrites the entire contents. If the file doesn't exist, it creates a new one, it takes 3 arguments file path, data to write, callback fn.⁡


// fs.writeFile("dummy.txt",'hello_world',(error)=>{
//     console.log(error);
// })


// ⁡⁣⁣⁢fs.open()-> It is used to open a file that takes 3 arguments file path , flag (w-write,r-reading(default),a-append), callback fn.⁡ 

// fs.open('dummy.txt','w',(error,file)=>{
//     if(error) throw error;
//     console.log("new file created");
// })


// ⁡⁣⁣⁢fs.appendFile()-> It appends specified content to a file. if the file does'nt exist, the file will be created ,it will take 3 arguments file path, data to append, callback fun.⁡ 

// fs.appendFile('dummy.txt', 'Hello content!', function (err) {
//     if (err) throw err;
//     console.log('Saved!');
//   });


// ⁡⁣⁣⁢fs.readdir()-> it is a method used to read the contents of directory. it returs an array of fileName or object from a specified path.it takes 2 argument file path and a callback function.⁡


// fs.readdir('../',(error,data)=>{
//     if(error) throw error;

//     const num=data; // data is an array contaning contents of directory.
// try{
//     fs.appendFile('dummy.txt',num.join('\n'),(error,data)=>{  // we are appending the same data back to dummy.txt 
//         if(error) throw error;
//         console.log('file appended successfully');

//     })
// }
// catch(error){
//     console.log("erorr detected");
// }

// })


// fs.readdir('../',(error,files)=>{

// fs.rm("dummy.txt",(error)=>{ // deleting the dummy.txt file
//     if(error) throw error;
// })

//     files.forEach((name)=>{
//         fs.appendFile('dummy2.txt',name+"\n",(error)=>{ // creating the new file and appending each data of files to new file (dummy2.txt)
//             if (error) throw error
//         })
//     })
// })


import { createServer } from 'node:http';

const server = createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World!\n');
});



// Browser se request will come to below and then it will go to create server as request and then server will send response as Hello world. 
server.listen(3000, '127.0.0.1', () => {
  console.log('Listening on 127.0.0.1:3000');
});


