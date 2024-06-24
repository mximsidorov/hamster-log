const express = require('express');
const https = require('https');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 443; // HTTPS использует порт 443 по умолчанию

// Настройка путей к сертификатам
const sslOptions = {
    key: fs.readFileSync(path.join(__dirname, 'key.pem')),
    cert: fs.readFileSync(path.join(__dirname, 'cert.pem'))
};

app.get('/', (req, res) => {
    res.send('Hello, HTTPS world!');
});

// Создание HTTPS сервера
https.createServer(sslOptions, app).listen(port, () => {
    console.log(`Server is running on https://localhost:${port}`);
});
