var express = require('express');
var router = express.Router();
var path = require('path');

router.get('/app/views/*', function (req, res) {
    res.render(path.join(__dirname, '..', 'public', 'bookstore', 'views', req.params['0']));
});

router.get('/app/*', function (req, res) {
    res.sendFile(path.join(__dirname, '..', 'public', 'bookstore', req.params['0']));
});

module.exports = router;
