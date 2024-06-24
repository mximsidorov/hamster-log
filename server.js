const express = require('express');
const app = express();
const port = 3000; // HTTP обычно использует порт 80, но для локальной разработки используется порт 3000

app.get('/', (req, res) => {
    res.send('Hello, HTTP world!');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
