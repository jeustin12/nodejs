const http = require('http')

http.createServer((req,res)=>{
   
    res.write('holas');
    res.end()


}).listen(8080)

console.log('puerto 8080');