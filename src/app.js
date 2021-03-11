const express = require('express');
const app = express();

const path = require('path');

app.get("/", (req, res) => {
    res.setHeader("set-cookie", ["setfromserver=1","cookieMonti=Valor seguro; Secure; httponly"])
    res.sendFile(`${__dirname}`)
});

app.set('port', process.env.PORT || 3000);

app.use(express.static(path.join(__dirname, 'public')));

module.exports = app;
