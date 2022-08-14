const path=require('path');
const rootDir=require('../util/path.js');
const express=require('express');

const router=express.Router();

router.get('/add-product',(req,res,next)=>{
    //console.log('into another middleware');
    res.sendFile(path.join(rootDir,'views','add-product.html'));
});
router.post('/add-product', (req,res,next)=>{
    console.log(req.body);
    res.redirect('/');
});
router.get('/contactus',(req,res,next)=>{
    res.sendFile(path.join(rootDir,'views','ContactUs.html'));
})
router.post('/success',(req,res,next)=>{
    res.sendFile(path.join(rootDir,'views','Success.html'));
})


module.exports=router;