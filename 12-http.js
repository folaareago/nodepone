const http = require('http');

const server = http.createServer((req,res) => {
console.log(req)
if(req.url === '/') {
   res.end('Welcome to our Home page');

}

if(req.url === '/about') {


}

res.end(`
<h1> Oops!</h1>
`)

})

server.listen(5000)