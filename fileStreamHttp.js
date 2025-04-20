const http=require('http');
const fs=require('fs');
//using EventEmiiter API
const server=http.createServer(function(req,res){
    // const text=fs.readFileSync('./content/big.txt','utf8');
    // res.end(text);
    const fileStream=fs.createReadStream('./content/big.txt','utf8');
    fileStream.on('open',()=>{
        fileStream.pipe(res);
    })
    fileStream.on('error',(err)=>{
        res.end(err);
    })
})
server.listen(5000)
