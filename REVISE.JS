
// let a=((c,d)=>{
//     return c*d;
// })
// console.log(a(2,3))

    // let Student={
    //     name:"SALONI",
    //     std:"5",
    //     div:"D",
    //     add:function(){
    //         console.log(`My name is ${this.name},std ${this.std}, division is ${this.div}`)
            
    //     }
    // };
    // Student.add()
    // const hobbies=['apple','oranges','','mango','','lemon']
    // hobbies.map((hobby)=>{if(hobby.length!=0){
    //     console.log(hobby)}
    //     else if(hobby.length===0){
            
    //         hobby='empty string'
    //         console.log(hobby)
    //     }
    // })
    // const obj1={'key1':1,'key2':100,'key3':1000}
    // let {key1,key3}={obj1}
    // console.log(obj1.key1)
    // key1=23
    // key3=123
    // console.log(key1,obj1.key3)
    // //--------
    //   const obj2={...obj1,key1:100}
    // if(obj2===obj1){
    //     console.log(obj1)
    // // }else {
    //     console.log(obj2)
    // // }
    // console.log('a')
    // console.log('b')
    
    // const fetchdata=()=>{
    //     const prom=new Promise((resolve,reject)=>{
    //         setTimeout(resolve('c'),3000)});
    //         return prom;
    // }
    // fetchdata().then((text)=>console.log(text)).then(()=>console.log('d')).then(()=>console.log('e'))
    //.then(()=>console.log('d')).then(()=> console.log('e'))
    const http=require('http');
    const server =http.createServer((req,res)=>
    {
        console.log('Saloni')
    })
    server.listen(3000);
    

   

