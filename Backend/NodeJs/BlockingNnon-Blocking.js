// Synchronous or blocking
// line by line execution

// Synchronous or blocking
// callbacks will fire:-

const fs = require("fs");
// it is asynchronous
fs.readFile("hello.txt","utf-8",(err, msg)=>{
    console.log(err, msg);
});
// this will print first
console.log('This will print first');