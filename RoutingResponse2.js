const http=require('http');
//core module imported
const express=require('express');

//third party package installed and imported
const bodyParser=require('body-parser');

const app=express();

app.use(bodyParser.urlencoded({extended:false}));

app.use('/add-product',(req,res,next)=>{
    //console.log('into another middleware');
    res.send('<form action="/product" method="POST"><input type="text" name="title"><input type="text" name="size"><button type="submit">Add Product</button></form>')
});
app.post('/product', (req,res,next)=>{
    console.log(req.body);
    res.redirect('/');
})
app.use('/',(req,res,next)=>{
    
    res.send('<h1>Hello from Express</h1>');
    
});


app.listen(3000);

// const server =http.createServer(app);

// server.listen(3000);