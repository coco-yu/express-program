var express = require('express');
var app = express();
var fortune = require('./lib/fortune.js');
app.use(express.static(__dirname + '/public'));
var handlebars = require('express3-handlebars').create({ defaultLayout: 'main' });
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');
app.disable('x-powered-by');

// 设置访问端口
app.set('port', process.env.PORT || 3000);

// 加载测试的条件
app.use(function (req, res, next) {
  res.locals.showTests = app.get('env') != 'production' && req.query.test === '1';
  next();
});

app.get('/', function (req, res) {
  res.render('home');
});

app.get('/about', function (req, res) {
  res.render('about', {
    fortune: fortune.getFortune(),
    pageTestScript: '/qa/tests/about.js'
  });
});

// tours下的页面添加路由
app.get('/tours/hood-river', function(req, res){
  res.render('tours/hood-river')
});

app.get('/tours/request-group-rate', function(req, res){
  res.render('tours/request-group-rate')
});

app.get('/headers', function(req, res){
  res.set('Content-Type', 'text/plain');
  var s = '';
  for(var name in req.headers) {
    s += name + ':' + req.headers[name] + '\n';
  }
  res.send(s);
});

// 定制404页面
app.use(function (req, res, next) {
  res.status(404);
  res.render('404');
});

// 定制500页面
app.use(function (err, req, res, next) {
  console.log(err.stack);
  res.status(500);
  res.render('500');
});

app.listen(app.get('port'), function () {
  console.log('listen');
});