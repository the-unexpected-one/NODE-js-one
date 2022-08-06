const http=require('http');
//core module imported
const express=require('express');

//third party package installed and imported
const bodyParser=require('body-parser');

const app=express();

const adminRoutes=require('./routes/admin.js');

const shopRoutes=require('./routes/shop.js');

app.use(bodyParser.urlencoded({extended:false}));

app.use('/admin',adminRoutes);

app.use('/shop',shopRoutes);

app.use((req,res,next)=>{
    res.status(404).send('<h1>Page not found</h1>')
})


app.listen(3000);

// const server =http.createServer(app);

// server.listen(3000);