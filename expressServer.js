const express=require('express');
const path = require('path');
const app=express();
//static assets are files which the server needs not to change them
app.use(express.static('./public'))

// app.get('/',(req,res)=>{
//     res.sendFile(path.resolve(__dirname,'./navbar-app/index.html'))
// }) This is because index.html is also a static assets


//remember the first argument is the resquet and other is a respond
app.all('*',(req,res)=>{
    res.status(404).send('<h1>Opps! Page Not Found!');
})

app.listen(5000,()=>{
    console.log('The server is listennung on port 5000');
})