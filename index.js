// Basics of file system:

// callback API.
import fs from "fs";


// 3 ways to create a file -> fs.writeFile(), fs.open(), fs.appendFile()

/* Why error is passed as an argument to these callback functions? 

 It is because they follow error-first callback function convention. meaning these callback functions doesn't need to return any additional data other than whether it succeeded or failed. if there is error then error will returned else nothing. this makes error handling simple and consistent. 

*/




// ⁡⁣⁢⁣fs.writeFile()⁡

// ⁡⁣⁣⁢It is used to create & write data to a file. If the file already exists, it overwrites the entire contents.⁡

// fs.writeFile("dummy.txt", 'hello_world', (error) => {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log('File is created.');
//   }
// });

// ⁡⁣⁢⁣fs.open()⁡

// ⁡⁣⁣⁢It is used to open a file that takes 3 arguments: file path, flag (w-write, r-read, a-append), callback function.⁡

// fs.open('dummy.txt', 'w', (error, file) => {
//   if (error) throw error;
//   console.log("New file created");
// });

// ⁡⁣⁢⁣fs.appendFile()⁡

// ⁡⁣⁣⁢It appends specified content to an existing file. If the file doesn't exist, a new file will be created.⁡

// fs.appendFile('dummy.txt', 'Hello content!', function (err) {
//   if (err) throw err;
//   console.log('Saved!');
// });


// ⁡⁣⁢⁣fs.rename()⁡
// ⁡⁣⁣⁢Renames the existing file with a new file name.⁡

// fs.rename("dummy.txt", "NodeBasic.txt", function (error) {
//   if (error) throw error;
//   console.log("File renamed");
// });


// ⁡⁣⁢⁣fs.copyFile()⁡

// ⁡⁣⁣⁢Copies data from one file to another.⁡

// fs.copyFile("Hey.txt", "./copy/Hey2.txt", function (error) {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log('Hey2 is created in the copy folder.');
//   }
// });

// ⁡⁣⁢⁣fs.unlink()⁡
// ⁡⁣⁣⁢Deletes a file.⁡

// fs.unlink("Hey.txt", function (error) {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log("Hey.txt is deleted.");
//   }
// });

// ⁡⁣⁢⁣fs.rm()⁡
// ⁡⁣⁣⁢Deletes a folder. By default, it allows deleting only blank folders.⁡

// fs.rm('./copy', { recursive: true }, function (error) {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log("./copy folder is removed.");
//   }
// });


// ⁡⁣⁢⁣fs.readdir()⁡
// ⁡⁣⁣⁢Reads the contents of a directory.⁡

// fs.readdir('./', function (error, files) {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log("Directory contents:", files);
//   }
// });


// fs.readFile() 
// It will read the 

fs.readFile('dummy.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
  } else {
    console.log('File contents:', data);
  }
});






// ⁡⁣⁢⁣⁡⁣⁢⁣Creating a server⁡ 

// import { createServer } from 'node:http';

// const server = createServer((req, res) => {
//   res.writeHead(200, { 'Content-Type': 'text/plain' });
//   res.end('Hello World!\n');
// });

// server.listen(3000, '127.0.0.1', () => {
//   console.log('Listening on 127.0.0.1:3000');
// });
