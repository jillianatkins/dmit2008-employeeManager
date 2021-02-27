/* 
       Read and Write File Utility
       Commonjs Modules
       exports.funcName = ()=>{}

       import
       require('module name)
    
*/
// fs -> file system
const fs = require('fs')
const path = require('path')

exports.getFileContents = (filePath)=>{
   let fileContents = JSON.parse(fs.readFileSync(path.join(__dirname, filePath)))
   console.log("in getFileContents " + fileContents)
   return fileContents 
}

exports.writeFileContents = (filePath, data) =>{
    // calling the getFileContents() method does not work
    //let fileContents = getFileContents(filePath)
    let fileContents = JSON.parse(fs.readFileSync(path.join(__dirname, filePath)))
    fileContents.push(data)
    fileContents = JSON.stringify(fileContents)
    fs.writeFileSync(path.join(__dirname, filePath), fileContents)
}


 

 