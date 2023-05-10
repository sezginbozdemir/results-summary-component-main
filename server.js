const http = require('http');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 3000;

fs.readFile('index.html', (err, html) => {
  if (err) {
    throw err;
  }

  http.createServer((req, res) => {
    if (req.url === '/style.css') {
      res.writeHead(200, {'Content-Type': 'text/css'});
      const css = fs.readFileSync('style.css', 'utf8');
      res.write(css);
    } else {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(html);
    }
    res.end();
  }).listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });
});