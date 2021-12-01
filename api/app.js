var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');
const mongodb = require('mongodb')

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var musica = require("./routes/musica")
// var clientes = require("./routes/clientes")
// var ventas = require("./routes/ventas")

var app = express();


app.use('/musica', musica)
// app.use('/clientes', clientes)
// app.use('/ventas', ventas)

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(cors());

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

let MongoClient = mongodb.MongoClient;

MongoClient.connect('mongodb://127.0.0.1:27017/', function (err, client) {
  if (err !== undefined) {
    console.log(err);
  } else {
    db = client.db('zonacero');
    console.log("connected");
  }
});




module.exports = app;
