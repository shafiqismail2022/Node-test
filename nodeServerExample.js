//We have learned how to set a server with Node.js. Now imagined a website having a tone of resources setting them up like this would be cumbersome but this is where express comes into play
const http =require('http');
const {readFileSync}=require('fs');
const homePage=readFileSync('./navbar-app/index.html');
const homeStyle=readFileSync('./navbar-app/styles.css');
const homeImage=readFileSync('./navbar-app/logo.svg');
const homeLogic=readFileSync('./navbar-app/browser-app.js');
const server=http.createServer((req,res)=>{
    // console.log('User hit the server');
    // res.end('Home Page')
    // console.log(req.url);
    const url=req.url;
    if(url=='/'){
        res.writeHead(200,{'content-type':'text/html'});
        res.write(homePage);
        res.end();
    }
    else if(url=='/about'){
        res.writeHead(200,{'content-type':'text/html'});
        res.write('<h1>Hi, This a Contact Page for our Project</h1>');
        res.end();
    }
    else if(url=='/styles.css'){
        res.writeHead(200,{'content-type':'text/css'});
        res.write(homeStyle);
        res.end();
    }
    else if(url=='/logo.svg'){
        res.writeHead(200,{'content-type':'image/svg+xml'});
        res.write(homeImage);
        res.end();
    }
    else if(url=='/browser-app.js'){
        res.writeHead(200,{'content-type':'text/javascript'});
        res.write(homeLogic);
        res.end();
    }
    else{
        res.writeHead(404,{'content-type':'text/html'});
        res.write('<h1>Oops! Page Not Found!</h1>');
        res.end();
    }
});
server.listen(5000);