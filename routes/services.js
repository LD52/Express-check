var express = require('express');
var router = express.Router();


router.get('/services', function(req, res, next) {
  res.send('services');
});
app.use('/', router);
app.use('/contact', router); 
app/use ('/services', router); 
app.listen(3002);
module.exports = router;