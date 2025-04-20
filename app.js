const express=require('express');
const {products} =require('./data')
const app=express();

// app.get('/api-json',(req,res)=>{
//     res.json(products   )

// })
app.get('/',(req,res)=>{
    res.send('<h1>Home Page</h1><a href="/api-products">products</a>');
})
app.get('/api-products',(req,res)=>{
    const newProduct=products.map((product)=>{
        const {id,name,image}=product;
        return {id,name,image}
    })
    res.json(newProduct)
})

app.get('/api-products/:productId',(req,res)=>{
    const {productId}=req.params
   const singleProduct=products.find((prod)=>{
    return  prod.id===Number(productId)
   })
   if(!singleProduct){
    return res.status(404).send('Product Not Found');
   }
    return res.json(singleProduct)
})

app.listen(5000,()=>{
    console.log('This server is listenning to port 5000...');
})