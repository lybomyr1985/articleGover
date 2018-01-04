 
var webpack = require('webpack')
var webpackDevMiddleware = require('webpack-dev-middleware')
var webpackHotMiddleware = require('webpack-hot-middleware')
var config = require('./webpack.config')
const bodyParser =require('body-parser');
const routs=require('./src/route/app');
const mongoose = require('mongoose');
const promise=require('bluebird');
var app = new (require('express'))()
var port = 3000

var compiler = webpack(config)
app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }))
app.use(webpackHotMiddleware(compiler))

mongoose.connect('mongodb://localhost/RDAarticle',{ useMongoClient: true });
//mongoose.Promise=promise;
mongoose.Promise=Promise;

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/src/public/index.html')
})

app.get('/test', function(req, res) {
  res.send('ddddfff')
});

app.use(bodyParser.json());

//error handling midleware
app.use(function(err, req,res,next){
//console.log(err);
   res.status(422).send({'error':err.message});
});

app.use('/api',routs);

app.listen(port, function(error) {
  if (error) {
    console.error(error)
  } else {
    console.info("==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.", port, port)
  }
})