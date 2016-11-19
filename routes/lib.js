var express = require('express');
var router = express.Router();
var path = require('path');

router.get('/lib/*', function (req, res) {
    res.sendFile(path.join(__dirname, '..', 'public', 'lib', req.params['0']));
});

module.exports = router;
