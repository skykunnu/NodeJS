// Basic of file system:- 


// callback API. 

import fs from "fs"

// 3 ways to create a file -> fs.writeFile(), fs.open(), fs.appendFile() 

// ⁡⁣⁣⁢fs.writeFile()-> It is used to create & write data to a file. If the file already exists, it overwrites the entire contents. If the file doesn't exist, it creates a new one, it takes 3 arguments file path, data to write, callback fn.⁡


// fs.writeFile("dummy.txt",'hello_world',(error)=>{
//   if(error){
//     console.log(error);
//   }  
//   else{
//     console.log('File is created.');
//   }
// })


// ⁡⁣⁣⁢fs.open()-> It is used to open a file that takes 3 arguments file path,  flag (w-write,r-reading(default),a-append), callback fn.⁡ 

// fs.open('dummy.txt','w',(error,file)=>{
//     if(error) throw error;
//     console.log("new file created");
// })


// ⁡⁣⁣⁢fs.appendFile()-> It appends specified content to an existing file. if the file does'nt exist, then a new file will be created. it will take 3 arguments file path, data to append, callback fun.⁡ 

// fs.appendFile('dummy.txt', 'Hello content!', function (err) {
//     if (err) throw err;
//     console.log('Saved!');
//   });


// ⁡⁣⁣⁢fs.rename() -> It renames the existing file with new file name. it will take 3 arguments file path, new file path, callback function.⁡ 

// fs.rename("dummy.txt","NodeBasic.txt",function(error){
//   if(error) throw error;

//   else{
//     console.log("file renamed");
//   }
// })


// ⁡⁣⁣⁢fs.copyFile() -> It copies the data of one file into another file inside a folder. it takes 3 arguments file path, ./folderName/newfile path, callback function.⁡ 

// In Below code, data inside Hey.txt file will get copied into Hey2.txt file that is present inside copy folder. copy folder was first created then only it will run.  

// fs.copyFile("Hey.txt", "./copy/Hey2.txt", function(error){
//   if(error){
//     console.log(error)
//   }
//   else {
//     console.log('Hey2 is created in copy folder.')
//   }
// } )

// ⁡⁣⁣⁢fs.unlink()-> It is used to delete a file.⁡ 

// fs.unlink("Hey.txt", function(error){
//   if(error){
//     console.log(error);
//   }
//   else{
//     console.log("Hey.txt is deleted.")
//   }
// })

// ⁡⁣⁣⁢fs.rm()-> means remove directory it is used to delete a folder. By default it allows you to delete a blank folder but no a folder containing files.⁡ 

// fs.rm('./copy',{recursive:true},function(error){
//   if(error){
//     console.log(error);
//   }
//   else{
//     console.log("./copy folder is removed.")
//   }
// })




// ⁡⁣⁣⁢fs.readdir()-> it is a method used to read the contents of directory. it returs an array of fileName or object from a specified path.it takes 2 argument file path and a callback function.⁡













// Creating a Server 


import { createServer } from 'node:http';

const server = createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World!\n');
});



// Browser se request will come to below and then it will go to create server as request and then server will send response as Hello world. 
server.listen(3000, '127.0.0.1', () => {
  console.log('Listening on 127.0.0.1:3000');
});


