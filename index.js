const http=require('http');
const os=require('node:os');

http.createServer((req,res)=>{
    res.writeHead(200, { 'Content-Type': 'application/json' });
    const myram=os.freemem();
    const convert=myram/(1024*1024*1024).toFixed(0.2);
    


    res.end(JSON.stringify({
      data: convert+"GB",
    }));
  }).listen(8000)