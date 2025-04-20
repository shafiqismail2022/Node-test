const http=require('http');
const server=http.createServer((req,res)=>{
    if(req.url==='/'){
       return res.end('Home Page');
    }
    if(req.url==='/about'){
        for(let i=0;i<1000;i++){ //Blocking code a problem with a sync
            for(let j=0;j<1000;j++){

            }
        }
       return res.end('About Page');
    }
    res.end('Error Page');
})
server.listen(5000,()=>{
    console.log("Server listenning to port 5000...");
})