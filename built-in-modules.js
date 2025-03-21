
const os=require('os')
// Getting user's infor
const user=os.userInfo()
console.log(user)
//getting system's uptime
console.log(`The System uptime is :${os.uptime()} seconds`)
//getting elements of Os module from an object
const currentOs={
name: os.type(),
release: os.release(),
totalMem:os.totalmem(),
freeMem:os.freemem()
}
console.log(currentOs)
//Path module
const path=require('path');
console.log(path.sep) //gives the path seperator of an operating system
//geting path of a file in a normalized way
const filePath=path.join('/content','subfolder','text.txt');
console.log(filePath)
//geting the base file i.e the last file in the path
const base=path.basename(filePath)
console.log(base)
//return an absolute path of the file
const absolute=path.resolve(__dirname,'content','subfolder','text.txt')
console.log(absolute)
//file system sync method module
const {readFileSync,writeFileSync}=require('fs')
//reading from file
const first=readFileSync('./content/first.txt','utf8') //this got encoded with hex
const second=readFileSync('./content/subfolder/text.txt','utf8')
function Output(value) {
    console.log(value); 
}
Output(first);
Output(second)  
writeFileSync('./content/addTwo.txt',`At the beginning ${first},${second}`,{flag:'a'}); //create a file and write to the file when we use flag we can append content to existing file content
//Asynchrous method
const {readFile, writeFile}=require('fs');
readFile('./content/first.txt','utf8',(err,result)=>{
if(err){
    console.log(err)
    return 1; //That is accessing one variable at a time
}
    const first01=result;
   // when accessing another file 
   readFile('./content/subfolder/text.txt','utf8',(err,result2)=>{
    if(err){
        console.log(err);
        return 1;
    }
    const  second01=result2;
    writeFile('./content/addTwo01.txt',`while we first came here, ${first01},${second01}`,(err,result03)=>{
        if(err){
            console.log(err);
            return 1;
        }
        console.log(result03);
    })
   })
})
