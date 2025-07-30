const path= require('path');
const file="./text/ravi.txt"

console.log(path.extname(file));
console.log(path.basename(file));
console.log(path.dirname(file));
console.log(path.resolve("text","peter.txt"));
console.log(__filename);
console.log(__dirname);