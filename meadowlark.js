var express = require('express');
var app = express();
var fortune = require('./lib/fortune.js');
app.use(express.static(__dirname + '/public'));
var handlebars = require('express3-handlebars').create({defaultLayout: 'main'});
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

// 定义幸运饼干


app.set('port', process.env.PORT || 3000);


app.get('/', function(req, res){
  res.render('home');
});

app.get('/about', function(req, res){
  res.render('about', {fortune: fortune.getFortune()});
});

// 定制404页面
app.use(function(req, res, next){
  res.status(404);
  res.render('404');
});

// 定制500页面
app.use(function(err, req, res, next){
  console.log(err.stack);
  res.status(500);
  res.render('500');
});

app.listen(app.get('port'), function(){
  console.log('listen');
});