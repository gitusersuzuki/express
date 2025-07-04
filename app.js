var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var helloRouter = require('./routes/hello');    // ADD_20250510
//var notesRouter = require('./routes/notes');    // ADD_20250517  // ※notes.jsでURLを養生しているため一時的にコメントアウトしとく
var catRouter   = require('./routes/cat');      // ADD_20250531
var yes_noRouter = require('./routes/yes_no');      // ADD_20250601

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/hello', helloRouter);   // ADD_20250510
//app.use('/notes', notesRouter);   // ADD_20250517  // ※notes.jsでURLを養生しているため一時的にコメントアウトしとく
app.use('/cat', catRouter);       // ADD_20250531
app.use('/yes_no', yes_noRouter); // ADD_20250601

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
