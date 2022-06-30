// const http = require('http');

// const server = http.createServer((req, res) => {
//     console.log('Server test');

//     let reqs = req.url.split('/');
//     let operation = reqs[1];
//     reqs.splice(0, 2);

//     console.log(operation);
//     console.log(reqs);

//     let s;
//     if(operation === 'plus') {
//         s = 0;
//         reqs.forEach(num => s += parseInt(num));
//     } else if(operation === 'minus') {
//         s = reqs[0];
//         reqs.splice(0, 1);
//         reqs.forEach(num => s -= parseInt(num));
//     } else if(operation === 'multiply') {
//         s = 1;
//         reqs.forEach(num => s *= parseInt(num));
//     } else if(operation === 'divide') {
//         s = reqs[0];
//         reqs.splice(0, 1);
//         reqs.forEach(num => s /= parseInt(num));
//     } else {
//         console.log("ERROR! Unknown operation!");
//     }

//     res.end(s.toString());
// });

// server.listen(8080);

const http = require('http');

const server = http.createServer((req, res) => {
    console.log('Server test');

    let reqs = req.url.split('/');
    let operation = reqs[1];
    reqs.splice(0, 2);

    console.log(operation);
    console.log(reqs);

    let s;
    switch(operation) {
        case 'plus':
            s = 0;
            return reqs.forEach(num => s += parseInt(num));
        case 'minus':
            s = reqs[0];
            reqs.splice(0, 1);
            return reqs.forEach(num => s -= parseInt(num));
        case 'multiply':
            s = 1;
            return reqs.forEach(num => s *= parseInt(num));
        case 'divide':
            s = reqs[0];
            reqs.splice(0, 1);
            return reqs.forEach(num => s /= parseInt(num));
        default:
            break;
    }

    res.end(s.toString());
});

server.listen(8080);
