const fs = require('fs');
//sync way
// Correct relative path from script location (inside crud/)
// fs.writeFileSync("./files/apple.txt", "this is fruit");
// fs.writeFileSync("./files/rpple.txt", "this is prerna singh");

//for delete the file
// fs.unlinkSync("./files/rpple.txt")
//now read the file
const data =fs.readFileSync('./files/apple.txt',"utf-8");
console.log(data);
//now update the data 


// fs.appendFileSync("./files/apple.txt","this is good for health")
//now read the file 
