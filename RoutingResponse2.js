const path=require('path');

const http=require('http');
//core module imported
const express=require('express');

//third party package installed and imported
const bodyParser=require('body-parser');


const app=express();



const adminRoutes=require('./routes/admin.js');

const shopRoutes=require('./routes/shop.js');

app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname,'public')))

app.use(shopRoutes);

app.use(adminRoutes);

app.use((req,res,next)=>{
    res.status(404).sendFile(path.join(__dirname,'views','404.html'));
})


app.listen(3000);

// const server =http.createServer(app);




