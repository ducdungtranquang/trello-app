console.log("Hello");
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require("mongoose");

var indexRouter = require('./routes/index');
const morgan = require('morgan');
const dotenv = require('dotenv');

var app = express();

dotenv.config();

// Router:
const userRouter = require("./routes/users");
const taskRouter = require("./routes/task");

app.get("/", (req,res)=>{
  res.send("Hello")
})

const port = 5000;
app.listen(port,()=>{
  console.log('server is running');
})

// Connect database

mongoose.connect(process.env.MONGODB_URL,()=>{
  console.log("Connected MongoDB");
})

app.use(morgan("common"));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Use routes:
app.use('/', indexRouter);
app.use('/users', userRouter);
app.use('/task',taskRouter);

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
