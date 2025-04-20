const { rejects } = require('assert');
const {readFile,writeFileSync, writeFile}=require('fs').promises;
const { resolve } = require('path');
// const util =require('util');
// const readFilePromise=util.promisify(readFile);
// const writeFilePromise=util.promisify(writeFile);
const start=async()=>{
    try{
        const first= await readFile('./content/first.txt','utf8')
        const second= await readFile('./content/addTwo.txt','utf8')
        await writeFile('./content/Promise-writeFile2.txt',`This is a A much simple way to deal with multiple request: ${first} ${second}`,{flag:'a'})
        // const first= await readFilePromise('./content/first.txt','utf8')
        // const second= await readFilePromise('./content/addTwo.txt','utf8')
        // await writeFilePromise('./content/Promise-writeFile.txt',`This is a A simple way to deal with multiple request: ${first} ${second}`)
        console.log(first, second)
    }catch(err){
        console.log(err);
    }
}
start()
// const getText=(path)=>{
//     return new Promise((resolve,reject)=>{
        
// readFile(path,'utf8',(err,data)=>{
//     if(err){
//         reject(err) ;
//     }else{
//         resolve(data);
//     }
// })
//     })
// }
//getText('./content/first.txt').then(result=>console.log(result)).catch(err=>console.log(err))