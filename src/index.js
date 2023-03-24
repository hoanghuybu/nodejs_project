const express = require('express');
const morgan = require('morgan');
const path = require('path')
const handlebars = require('express-handlebars');
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));

//HTTP logger
app.use(morgan('combined'));

//Templet engine
app.engine('.hbs', handlebars({
        extname: '.hbs'
}));
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'resource/views'));


/* hàm (req, res) => res.send('Hello World!') tương đương
        function(req, res) {
            return res.send('Hello World!');
        }
*/
app.get('/news', (req, res) => {
        res.render('news');
});
app.get('/', (req, res) => {
        res.render('home');
});
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));