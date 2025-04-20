// create the module and then invoke it
const express=require('express');
const app = express();
// const originalGet = app.get.bind(app);
// app.get = (path, ...handlers) => {
//   console.log('[DEBUG] app.get called with path:', path);
//   return originalGet(path, ...handlers);
// };

// const originalUse = app.use.bind(app);
// app.use = (path, ...handlers) => {
//   console.log('[DEBUG] app.use called with path:', path);
//   return originalUse(path, ...handlers);
// };

// The resource that is required to be accessed
app.get('/',(req,res)=>{
    console.log('User hit the resource Page')
    res.status(200).send('Hellow World');
})
app.get('/about',(req,res)=>{
    console.log('User hit the contact Page')
    res.send('About Page')
})
// handling all other resources
app.all('/*',(req,res)=>{
    res.status(404).send('<h1>Page Not FOUND_</h1>')
})
app.listen(5000,()=>{
    console.log('The server is listenning on port 5000...')
})