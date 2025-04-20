const {writeFile}=require('fs');
for(let i=0;i<1000;i++){
    writeFile('./content/big.txt',`Hello world ${i}\n`,{flag:'a'},(err) => {
        if (err) throw err});
        }
const{createReadStream}=require('fs');
// const stream=createReadStream('./content/big.txt');
const stream=createReadStream('./content/big.txt',{highWaterMark:10000,encoding:'utf8'});
stream.on('data',(result)=>{
    console.log(result);
})
stream.on('error',(err)=>{
    console.log(err);
})