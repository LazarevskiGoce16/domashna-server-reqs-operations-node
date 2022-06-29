const http = require('http');

const server = http.createServer((req, res) => {
    console.log('Server test');

    let reqs = req.url.split('/');
    let operation = reqs[1];
    reqs.splice(0, 2);

    console.log(operation);
    console.log(reqs);

    let s = 0;
    if(operation === 'plus') {
        s = 0;
        reqs.forEach(num => s += parseInt(num));
    }
    
    if(operation === 'minus') {
        s = reqs[0];
        reqs.splice(0, 1);
        reqs.forEach(num => s -= parseInt(num));
    }

    if(operation === 'multiply') {
        s = 1;
        reqs.forEach(num => s *= parseInt(num));
    }
    
    if(operation === 'divide') {
        s = reqs[0];
        reqs.splice(0, 1);
        reqs.forEach(num => s /= parseInt(num));
    } 

    res.end(s.toString());
});

server.listen(8080);
