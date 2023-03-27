const Course = require('../models/Course');
const { mutipleMongooseToObject } = require('../../util/mongoose');

class SiteController {
    // [GET] /
    // -- Code 1 tương đương code 2
    index(req, res, next) {
        Course.find({})
            .then((courses) => {
                res.render('home', {
                    courses: mutipleMongooseToObject(courses),
                });
            })
            .catch((err) => next(err));
    }

    // code 2
    /*
    async index(req, res, next) {
        try {
            const courses = await Course.find({});
            res.json(courses);
        } catch (err) {
            console.error(err);
            res.status(400).json({ error: 'Error' });
        }
    }
    */

    // [GET] /search
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();
