const express = require('express');
const router = express.Router();
const siteController = require('../app/controllers/NewsController');

router.use('/search', siteController.s);
router.use('/', newsController.index);

module.exports = router;
