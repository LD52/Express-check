var express = require('express');
var router = express.Router();


router.get('/contact', function(req, res, next) {
  res.send('contact');
});
app.use('/', router);
app.use('/contact', router); 
app/use ('/services', router); 
app.listen(3001);
module.exports = router;
