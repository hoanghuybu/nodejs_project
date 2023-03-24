const express = require('express');
const app = express();
const port = 3000;

/* hàm (req, res) => res.send('Hello World!') tương đương
        function(req, res) {
            return res.send('Hello World!');
        }
*/
app.get('/home', (req, res) => res.send('Hello World!'));

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));