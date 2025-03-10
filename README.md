# NodeJS 

-> Node js is a runtime environment of javascript. 

-> It is built on top of Chromium(V8 engine) and C++.

-> V8 engine has an ability to compile and execute js. 

-> The V8 engine is not fully embedded to C++. The DOM & Windows related stuff is removed from V8 while embedding with C++.

->  A Node.js app runs in a single process, without creating a new thread for every request. 

-> Node.js uses event driven-architecture, non-blocking I/O model to handle concurrent request with single thread. 

-> Build apps with node.js like Netflix, chatApp, paymentsApp, RestApi and so on. 


# Commands to setup node backend

1. npm init -y 

2. npm i -g nodemon - to  Automatic restart backend server on code changes. 

3. npm i express - to download express environment.

4. npm i mongoose - to download database. 

5. 












# Nodejs vs Browser

-> With Browser we have access to DOM, Web API where as with Node.js we have modules provide to access to file system, OS. 


-> Node.js supports both the commonJS(require()) and ES module systems (import)


-> ⁡⁣⁢⁣Dependencies⁡- These are the packages that are essential for the core functionality of the application.
For ex- If you are using Express to build the web server, it should be listed under dependencies because it's needed to run the app. 



-> ⁡⁣⁢⁣Dev Dependencies⁡- These are those packages that are only needed during development but are not necessary for running the application in production. ex- ESLint(linter), Jest(testing framework) & nodemon so on.  


# What is a framework

-> It is a collection of pre-written code that provides a structured way to develop software application. 

- The framework is itself in control of the application flow. Instead of you calling the framework, it calls your code at specific points. 

# Express.js -> it is a Framework 

-> It is an npm package to build the web server. 
-> it manages everything from receiving the request and giving the response. 

-> It manages everything from receiving the request and giving the response. 

