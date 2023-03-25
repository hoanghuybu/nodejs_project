const express = require('express');
const morgan = require('morgan');
const path = require('path')
const handlebars = require('express-handlebars');
const app = express();
const port = 3000;
const route = require('./route');

app.use(express.static(path.join(__dirname, 'public')));

//HTTP logger
app.use(morgan('combined'));

//Templet engine
app.engine('.hbs', handlebars({
        extname: '.hbs'
}));
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'resource/views'));

route(app);


app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));