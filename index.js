const http = require('http');
const fs = require('fs').promises;

const server = http.createServer(listener);

async function listener(req, res) {
    req.method == 'GET' && await getHandler(req, res);
    
    req.method == 'POST' && await getHandler(req, res);
    
    req.method == 'PUT'&& await getHandler(req, res);

    req.method == 'DELETE'&& await getHandler(req, res);

    res.end();
}

server.listen(4004, () => console.log('server started'));


//------------- handlers

async function getHandler(req, res) {
    if (req.url == '/') {
        try {
            const html = await fs.readFile('index.html', 'utf-8');
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(html);
        } catch (error) {
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.write('Error');
        }
    }

    if(req.url == '/data') {
        res.writeHead(200, { 'Content-Type': 'application/json' })
        res.write(JSON.stringify(data));
    }
}

//------------- data

const data = [{name: 'name1', id: 1}, {name: 'name2', id: 2}, {name: 'name3', id: 3}]

