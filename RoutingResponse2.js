const http=require('http');
//core module imported
const express=require('express');
//third party package installed and imported
const app=express();
app.use((req,res,next)=>{
    console.log('Into the middleware');
    next();
});
app.use((req,res,next)=>{
    console.log('into another middleware');
    res.send('<h1>Hello from Express,js</h1>')
})


app.listen(3000);

// const server =http.createServer(app);

// server.listen(3000);