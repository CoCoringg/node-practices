var express = require('express');

var router = express.Router();

router.route('').get(function(req, resp){
    resp.render('main/index');
});

module.exports = router;