//const ... = require('...'); tương tự import file trong java
const express = require('express');
const morgan = require('morgan');
const path = require('path');
const handlebars = require('express-handlebars');
const app = express();
const port = 3000;
const route = require('./route');
const db = require('./config/db');
const methodOverride = require('method-override');

//Config method
app.use(methodOverride('_method'));

//Connect to DB
db.connect();

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded());
app.use(express.json());

//HTTP logger
app.use(morgan('combined'));

//Templet engine
app.engine(
    '.hbs',
    handlebars({
        extname: '.hbs',
        helpers: {
            sum: (a, b) => a + b,
        },
    }),
);
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'resource', 'views'));

// Routes init

route(app);

app.listen(port, () =>
    console.log(`App listening at http://localhost:${port}`),
);
