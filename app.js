var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors=require('cors');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var tasksRouter = require('./routes/task_router');
var product_tblRouter = require('./routes/product_tbl_router');
var user_tblRouter = require('./routes/user_tbl_router');

var basic_tblRouter = require('./routes/basic_tbl_router');
var permanent_add_tblRouter = require('./routes/permanent_add_tbl_router');
var present_add_tblRouter = require('./routes/present_add_tbl_router');
var previous_empRouter = require('./routes/previous_emp_router');
var qualification_tblRouter = require('./routes/qualification_tbl_router');
var skill_tblRouter = require('./routes/skill_tbl_router');



var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(cors());

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/tasks',tasksRouter);
app.use('/user_tbl',user_tblRouter);
app.use('/product_tbl',product_tblRouter);

app.use('/basic_tbl',basic_tblRouter);
app.use('/permanent_add_tbl',permanent_add_tblRouter);
app.use('/present_add_tbl',present_add_tblRouter);
app.use('/previous_emp',previous_empRouter);
app.use('/qualification_tbl',qualification_tblRouter);
app.use('/skill_tbl',skill_tblRouter);

app.use('/', indexRouter);
app.use('/users', usersRouter);

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
