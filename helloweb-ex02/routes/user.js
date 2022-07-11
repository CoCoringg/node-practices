var express = require('express');

var router = express.Router();

router.route('').get(function(req, resp){
    resp.render('user/info', {
        no: req.query.no || 0
    });
});

router.route('/join').get(function(req, resp){
    resp.render('user/join');
});

router.route('/:no').get(function(req, resp){
    resp.render('user/info2', {
        no: req.params.no || 0
    });
});

router.route('/join').post(function(req, resp){
    console.log(req.body);
    resp.redirect('/');
});

router.route('/api').get(function(req, resp){
    vo = {
        no: 10,
        name: "둘리",
        email: "dooly@mysite.com",
        gender: 'male'
    };
    resp.send(vo);
});

module.exports = router;