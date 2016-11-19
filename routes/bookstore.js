var express = require('express');
var router = express.Router();
var path = require('path');

router.get('/app/*', function (req, res) {
    res.sendFile(path.join(__dirname, '..', 'public', 'bookstore', req.params['0']));
});

module.exports = router;
