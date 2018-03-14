var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('pageNews.html', { title: 'Express' });
});
router.get('/menu', function(req, res, next){
  res.render('pageMenu.html', {});
});
router.get('/events', function(req, res, next){
  res.render('pageEvents.html', {});
})
router.get('/about', function(req, res, next){
  res.render('pageAbout.html',{});
})
module.exports = router;
