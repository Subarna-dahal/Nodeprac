const http=require('http');
// const os=require('node:os');

http.createServer((req,res)=>{
    // res.writeHead(200, { 'Content-Type': 'application/json' });
    // const myram=os.freemem();
    // const convert=myram/(1024*1024*1024).toFixed(0.2);
    


    // res.end(JSON.stringify({
    //   data: convert+"GB",
    // }));
  }).listen(8000)

  // const fs=require('fs');
  // fs.writeFileSync('apple.txt',"hello subatna");
// const fs=require('fs');
// const path=require('path');
// const dirPath=path.join(__dirname,"files");

// for(i=0;i<=5;i++){
//   fs.writeFileSync(`${dirPath}/hello${i}.txt`,"hello dev i am very good");

// }

// const fs=require('fs');
// const path=require('path');
// const dirPath=path.join(__dirname,'files');

//  fs.readdir(dirPath,((error,files)=>{
//     files.forEach((item)=>
//     console.log(item))
//  }))
 const fs=require('fs');
 const path=require('path');

 const dirPath=path.join(__dirname,'files')
  // fs.writeFileSync(`${dirPath}/one.txt`,"hello i am learning the node js ");
  // fs.writeFile(`${dirPath}/fdd.txt`,"hello i am goat",(error)=>{
  //   if(error){
  //     console.log('error in this code ');

  //   }
  //   else{
  //     console.log('file made sucesfully');
  //   }
  // });
  //  const data=fs.readFileSync(`${dirPath}/hello1.txt`,'utf8',);
  //  console.log(data);

//  fs.readFile(`${dirPath}/one.txt`,'utf8',((err,item)=>{
//   console.log(item);
// //  }))
// fs.appendFile(`${dirPath}/hello1.txt`,"hello i updated the code here ",()=>{
//   console.log('it is updated');
// // });
//   fs.rename(`${dirPath}/hello1.txt`,`${dirPath}/hellochanged.txt`,()=>{
//     console.log('file name changed');
//   });

// fs.unlink(`${dirPath}/hello3.txt`,()=>{
//   console.log('file deleted sucessfully');
// })

// const createdata=(data,file)=>{
//    return fs.writeSync(file,data);
// }
// createdata('hello world','fi.txt');\
// const{properCae,Slugify,truncate}=require('./String.js');
// const Cart={
//   name:"copy",
//   price:100
// }

// const events=require('events');
// const eventEmitter=new events.EventEmitter();
// const hi=(Cart)=>{
//   const totaldata=0.13*Cart?.price+Cart?.price;
//   console.log(`your price of the cart after discount is ${totaldata}`);
// }

// //create and listen
// eventEmitter.on("Scream",(item)=>{
//   hi(item)
// });

// //fire
// eventEmitter.emit("Scream",Cart);

// const properCase=require('proper-upper-case')
// const convert=(test)=>{
//   return properCase(test);
// }

// const result= convert('subarna dahal')
// console.log(result);

//   //slugify(slug generate)
// const slugify=require('slugify');
//  var changeddata='hello i am god of the world';

// const slugfunction=(data)=>{
//   return slugify(data);
// }
// console.log(slugfunction(changeddata));

  //lodash(truncate)
//   const truncate=require('truncate');
//   const value='hello it is beatufull day today i am bleesed that this day i am leaving';

//   const truncates=(data,length)=>{
//  return truncate(data,length);
//   }


//  console.log(truncates(value,20));
  //bycript



//password encrypt
// const bcrypt = require('bcrypt');

// const data = "subarna";

// const changedfun = async (value) => {
//   try {
//     return await bcrypt.hash(value, 10);
//   } catch (e) {
//     console.log('error', e);
//   }
// };

// const comparefunction = async (planedata, hashevalue) => {
//   try {
//     return await bcrypt.compare(planedata, hashevalue);
//   } catch (e) {
//     console.log('error in the code', e);
//   }
// };
// changedfun(data).then((hashdata) => {
//   console.log('Hashed Data:', hashdata);

//   comparefunction(data, hashdata).then((ismatched) => {
//     if (ismatched) {
//       console.log('The value is matched');
//     } else {
//       console.log('The value is not matched');
//     }
  
// });
// });


// nodemailer
// const nodemailer=require('nodemailer');

// const transporter=nodemailer.createTransport({

//   host:"smpt.ethereal.email";
//   port:460,
//   secure:false

//   auth:{
//     host:"subarnadahal";
//   }
// })