const fs =require('fs')

const requestHandler = (req, res) => {
    const url = req.url;
    const method = req.method;

    if(url==='/'){
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Enter message</title><head>');
        res.write('<body>' +
            '<h1>Hello</h1>' +
            '<ul><li>user 1</li><li>user 2</li><li>user 3</li></ul>' +
            '<form action="/create-user" method="POST"><input type="text" name="username"/> <button type="submit">Send</button></form>' +
            '</body>');
        res.write('</html>');
        return res.end();
    }

    if(url==='/create-user' && method ==='POST'){
        const body=[];
        req.on('data', (chunk)=>{
            body.push(chunk)
        })
        req.on('end', ()=>{
            const parseBody = Buffer.concat(body).toString();
            const username = parseBody.split('=')[1]
            console.log(username);
        });
    }

    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>my first page</title><head>');
    res.write('<body>my page</body>');
    res.write('</html>');
    res.end();
}

module.exports = {
    handled: requestHandler,
    someText: 'some hard coded text'
};