


//one way to create 

// const fs = require('fs');

// const operation=process.argv[2];
// if(operation=='write'){
//     const name=process.argv[3];
//     const content=process.argv[4];
//     console.log(operation,name,content);
// 
// }
//2nd way to write the code 
//  const fs = require('fs');

// const operation = process.argv[2];

// if (operation === 'write') {
//     const name = process.argv[3];
//     const content = process.argv[4];

//     const fullName = "./files/" + name + ".txt"; // ✅ fixed double dot

//     console.log("Operation:", operation);
//     console.log("File name:", name);
//     console.log("Content:", content);

//     try {
//         fs.writeFileSync(fullName, content);
//         console.log("File written successfully!");
//     } catch (err) {
//         console.error("Error writing file:", err);
//     }
    
// }

// const fs = require('fs');

// const operation = process.argv[2];

// if (operation === 'read') {
//     const name = process.argv[3];
//     const fullName = "./files/" + name + ".txt";

//     console.log("Operation:", operation);
//     console.log("File name:", name);

//     try {
//         const data = fs.readFileSync(fullName, 'utf-8');
//         console.log("File content:");
//         console.log(data);
//     } catch (err) {
//         console.error("Error reading file:", err);
//     }
// }

// const fs = require('fs');

// const operation = process.argv[2];

// if (operation === 'update') {
//     const name = process.argv[3];
//     const content = process.argv[4];
//     const fullName = "./files/" + name + ".txt";

//     console.log("Operation:", operation);
//     console.log("File name:", name);
//     console.log("New Content to Add:", content);

//     try {
//         fs.appendFileSync(fullName, "\n" + content);
//         console.log("File updated successfully!");
//     } catch (err) {
//         console.error("Error updating file:", err);
//     }
// }

// const fs = require('fs');

// const operation = process.argv[2];

// if (operation === 'delete') {
//     const name = process.argv[3];
//     const fullName = "./files/" + name + ".txt";

//     console.log("Operation:", operation);
//     console.log("File name:", name);

//     try {
//         fs.unlinkSync(fullName);
//         console.log("File deleted successfully!");
//     } catch (err) {
//         console.error("Error deleting file:", err);
//     }
// }

//all crud opertion here using if else condition 


const fs = require('fs');

const operation = process.argv[2];

if (operation === 'write') {
    const name = process.argv[3];
    const content = process.argv[4];
    const fullName = "./files/" + name + ".txt";

    console.log("Operation:", operation);
    console.log("File name:", name);
    console.log("Content:", content);

    try {
        fs.writeFileSync(fullName, content);
        console.log("✅ File written successfully!");
    } catch (err) {
        console.error("❌ Error writing file:", err);
    }

} else if (operation === 'read') {
    const name = process.argv[3];
    const fullName = "./files/" + name + ".txt";

    console.log("Operation:", operation);
    console.log("File name:", name);

    try {
        const data = fs.readFileSync(fullName, 'utf-8');
        console.log("📖 File content:");
        console.log(data);
    } catch (err) {
        console.error("❌ Error reading file:", err);
    }

} else if (operation === 'update') {
    const name = process.argv[3];
    const content = process.argv[4];
    const fullName = "./files/" + name + ".txt";

    console.log("Operation:", operation);
    console.log("File name:", name);
    console.log("Content to Add:", content);

    try {
        fs.appendFileSync(fullName, "\n" + content);
        console.log("🔄 File updated successfully!");
    } catch (err) {
        console.error("❌ Error updating file:", err);
    }

} else if (operation === 'delete') {
    const name = process.argv[3];
    const fullName = "./files/" + name + ".txt";

    console.log("Operation:", operation);
    console.log("File name:", name);

    try {
        fs.unlinkSync(fullName);
        console.log("🗑️ File deleted successfully!");
    } catch (err) {
        console.error("❌ Error deleting file:", err);
    }

} else {
    console.log("❗ Invalid operation. Use one of:");
    console.log("  node fsCrud.js write filename content");
    console.log("  node fsCrud.js read filename");
    console.log("  node fsCrud.js update filename content");
    console.log("  node fsCrud.js delete filename");
}

