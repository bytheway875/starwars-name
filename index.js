var express = require('express');
var app = express();

app.use(express.static('public/styles'));
app.use(express.static('public/scripts'));
app.use(express.static('public/fonts'));
app.use(express.static('public/images'));
app.use(express.static('public/sounds'));

app.get('/', function(request, response) {
  response.sendFile(__dirname + "/public/templates/star-wars.html");
});

app.listen(process.env.PORT || 3000, function () {
  console.log('Spinning up the app!')
});
