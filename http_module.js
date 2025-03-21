const http =require('http');
const server =http.createServer((req,res)=>{ //a small description of the request and respond object 
    if(req.url=='/'){
        res.end('Welcome to Our Node Server');
        return;
    }
    if(req.url=='/about'){
        res.end('Here is a short summary of our history');
        return;
    }
    res.end(`<h1>Oops!</h1>
        <p>We can't seem to find what you are looking for</p>
        <a href="/">Back Home</a>`);
    
})
server.listen(5000);