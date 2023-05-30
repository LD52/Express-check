const express = require('express');

const app = express();

const router = express.Router();

router.get('/', (req, res) => {
  res.send('index');
});

router.get('/services', (req, res) => {
  res.send('/services');
});

router.get('/contact', (req, res) => {
  res.send('./contact');
});

const isWorkingHours = (req, res, next) => {
  const now = new Date();
  if (now.getHours() >= 9 && now.getHours() <= 17 && now.getDay() >= 1 && now.getDay() <= 5) {
    next();
  } else {
    res.send('The website is currently closed.');
  }
};

app.use(isWorkingHours);
app.use('/', router);
app.use('/contact', router); 
app/use ('/services', router); 
app.listen(3000);

module.exports = router;
