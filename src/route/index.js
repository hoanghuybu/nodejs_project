const newsRouter = require('./news');
const siteRouter = require('./site');
const coursesRouter = require('./courses');

function route(app) {
    /* hàm (req, res) => res.send('Hello World!') tương đương
        function(req, res) {
            return res.send('Hello World!');
        }
    */
    // app.get('/news', (req, res) => {
    //         res.render('news');
    // });
    app.use('/news', newsRouter);

    // app.get('/', (req, res) => {
    //     res.render('home');
    // });

    app.use('/courses', coursesRouter);

    app.use('/', siteRouter);
    // app.get('/search', (req, res) => {
    //     res.render('search');
    // });
}

module.exports = route;
