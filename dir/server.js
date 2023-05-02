const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/public/index.html');
});

app.get('/halaman-kedua', function (req, res) {
    res.sendFile(__dirname + '/public/halaman-kedua.html');
});

app.get('/halaman-ketiga', function (req, res) {
    res.sendFile(__dirname + '/public/halaman-ketiga.html');
});

app.listen(3000, function () {
    console.log('Server berjalan di port 3000');
});