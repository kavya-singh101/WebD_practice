const fs = require("fs");

let text = fs.readFileSync('hello.txt','utf-8');
console.log(text);

// change will not reflect in original file
text=text.replace('kavya','hunny');
console.log(text);

// will create a file if doesn't exist
fs.writeFileSync('newfiles.txt',text);