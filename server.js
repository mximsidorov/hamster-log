const https = require('https');
const fs = require('fs');

const options = {
    key: fs.readFileSync('server.key'),  // Загрузка ключа сервера
    cert: fs.readFileSync('server.cert') // Загрузка сертификата сервера
};

const server = https.createServer(options, (req, res) => {
    res.writeHead(200);
    res.end('Hello, HTTPS World!');
});

server.listen(443, () => {
    console.log('Сервер запущен на порту 443');
});
