const createError = require('http-errors');
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const cookieParser = require('cookie-parser');
const debug = require('debug')('service:server');
const http = require('http');
const logger = require('morgan');

const usersRouter = require('./routes/users');
const codeRouter = require('./routes/code');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/users', usersRouter);
app.use('/code', codeRouter);

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
const port = normalizePort(process.env.PORT || '3000');
app.set('port', port);
const server = http.createServer(app);
server.listen(port);
server.on('error', onError);
server.on('listening', onListening);

function normalizePort(val) {
  const port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}
function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  const bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}
function onListening() {
  const addr = server.address();
  const bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port;
  debug('Listening on ' + bind);
}
const options = {
  db_user: "wangjingren",
  db_pwd: "199661",
  db_host: "121.5.65.243",
  db_port: 27017,
  db_name: "PersonalWebsite",//数据库名称
  useNewUrlParser: true
}
const dbURL = "mongodb://wangjingren:199661@121.5.65.243:27017/PersonalWebsite?authSource=admin";
mongoose.connect(dbURL,{ useNewUrlParser: true, useUnifiedTopology: true })
.then(() => console.log('数据库连接成功'))
.catch((err) => console.log('数据库连接失败',err));
console.log('\x1b[36m%s\x1b[0m',`


    ██████▒█    ██  ▄████▄   ██ ▄█▀       ██████╗ ██╗   ██╗ ██████╗
   ▓█    ▒ █▓  ▒██▒▒██▀ ▀█   ██▄█▒        ██╔══██╗██║   ██║██╔════╝
   ▒████░ ▒█▓  ▒██ ▒▓█    ▄ ▓███▄░        ██████╔╝██║   ██║██║  ███╗
   ░██▒  ░▒▓█  ░██ ▒▓▓▄ ▄██▒▓██ █▄        ██╔══██╗██║   ██║██║   ██║
   ░██░   ▒▒█████▓ ▒ ▓███▀ ░▒██▒ █▄       ██████╔╝╚██████╔╝╚██████╔╝
    ▓ ░              ░▒ ▒  ░▒ ▒▒ ▓▒       ╚═════╝  ╚═════╝  ╚═════╝


服务启动成功*****
监听${process.env.PORT || '3000'}端口成功*****`)
