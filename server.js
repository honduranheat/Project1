var express = require("express");
var bodyParser = require("body-parser");
var handlebars = require('express-handlebars');

var app = express();
app.use(express.static(__dirname + '/public'));

app.use(bodyParser.urlencoded({ extended: false }));

app.engine('handlebars', handlebars({
    defaultLayout: 'main'
}));

app.set('view engine', 'handlebars');

// home page
app.get('/', function(req, res) {
    res.render('index');
});


app.get('/newRecipe', function(req, res) {
    res.render('newRecipe');
});

app.get('/database', function(req, res) {
    res.render('allData');
});

app.get('/personal', function(req, res) {
    res.render('personalPage');
});
app.get('/search', function(req, res) {
    res.render('search');
});
app.get('/users', function(req, res) {
    res.render('users');
});

app.get('/posts/:id', function(req, res) {
    res.render('singleRecipe');
});

var PORT = process.env.PORT || 8080;



  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });

