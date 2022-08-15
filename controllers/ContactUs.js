const rootDir=require('../util/path.js');
const path=require('path');
exports.ContactUs2=(req,res,next)=>{
    res.sendFile(path.join(rootDir,'views','ContactUs.html'));
}

exports.success=(req,res,next)=>{
    res.sendFile(path.join(rootDir,'views','Success.html'));
}