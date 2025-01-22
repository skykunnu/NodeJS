import http from "http";

let cars = [
  { id: 1, model: "porsche", make: 2000 },
  { id: 2, model: "lambhorgini", make: 2023 },
  { id: 3, model: "mercedes", make: 2023 },
  { id: 4, model: "tesla", make: 2050 },
  { id: 5, model: "aston martin", make: 2000 },
];

const server = http.createServer((request, response) => {
  if (request.method === "GET") {
  
    response.writeHead(200,{"Content-Type":"Application/json"})
    response.end(JSON.stringify(cars))

  }
    else if (request.method === "POST") {
        let body=""

    request.on('data',(carsItem)=>{
            body+=carsItem;
        })
    request.on('end',()=>{
        cars.push(JSON.parse(body));
        response.writeHead(200,{"Content-Type":"Application/json"})
        response.end(JSON.stringify(cars))
    })
  } 
  else if (request.method === "DELETE" && request.url.match(/\/\d+/)) {

    const idToDelete=request.url.split('/')[1];
    const updatedData=cars.filter((carsItem)=>carsItem.id!==Number(idToDelete));

  response.writeHead(200,{"Content-Type":"Application/json"})
    response.end(JSON.stringify(updatedData))
    
  } 
  else if (request.method === "PUT" && request.url.match(/\/\d+/)) {
    const idToEdit=request.url.split('/')[1];
    
    let body="";
    request.on('data',(carsItem)=>{
        body+=carsItem
    })
    request.on('end',()=>{
        const updatedData=cars.map((carItem)=>{
          return carItem.id===Number(idToEdit)? JSON.parse(body):carItem});

        response.writeHead(201,{"Content-Type":"Application/json"})
        response.end(JSON.stringify(updatedData))

    })
    };
  
});

server.listen(3000, () => {
  console.log("Server has started on 3000")
});