var http = require('http'); // 1 - Import Node.js core module

var server = http.createServer(function (req, res){   
    if(req.url=="/"){
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('<html><body><p style="color:red"> Welcome to our weeboo homepage.</p></body></html>');
    
    res.end();
}else if(req.url=="/student"){
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('<html><body><img src="https://about.fb.com/wp-content/uploads/2018/08/privacy-001.jpeg?fit=1920%2C1080" style="width: 180px"><></body></html>')
    res.write('<html><body><input type="text> size="20"/> <input type="button" value="Login"></body></html>');
    res.end();
}else if(req.url=="/admin"){
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('<html><body><p style="color:red"> dai gay.</p></body></html>');
    res.end();
}else{
    res.end('invalid ');
}
});

server.listen(5000); //3 - listen for any incoming requests
    
console.log('Node.js web server at port 5000 is running..')