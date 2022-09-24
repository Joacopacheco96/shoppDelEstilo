const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());

var ig = require('instagram-scraping');

// ig.scrapeTag('veranda').then((result) => {
//   console.log(result.total);
// });
ig.scrapeUserPage('joacopacheco96').then((result) => {
    console.log(result);
  });

app.listen(3001, function () {
    console.log('App corriendo en el puerto 3001');
});
