const cors = require('cors');
const path = require('path');
const logger = require('morgan');
const express = require('express');
const createError = require('http-errors');
const cookieParser = require('cookie-parser');

const usersRouter = require('./routes/users.routes');
const roomsRouter = require('./routes/rooms.routes')

const app = express();
app.io = require('socket.io')();
// view engine setup
app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');
app.set('view engine', 'ejs');

app.use(cors());
app.use(logger('dev'));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/users', usersRouter);
app.use('/rooms', roomsRouter);

// catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });

// // error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });

app.get('/', (req, res) => {
  res.render('chat');
});

// 소켓 함수 구현
app.io.on('connection', (socket) => {
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });


  socket.on('leaveRoom', (roomNum, name) => {
    socket.leave(roomNum, () => {
      console.log(name + ' leave a ' + roomNum);
      app.io.to(roomNum).emit('leaveRoom', roomNum, name);
    });
  });


  socket.on('joinRoom', (roomNum, name) => {
    socket.join(roomNum, () => {
      console.log(name + ' join a ' + roomNum);
      app.io.to(roomNum).emit('joinRoom', roomNum, name);
    });
  });


  socket.on('chat message', (roomNum, name, msg) => {
    app.io.to(roomNum).emit('chat message', name, msg);
  });
});

module.exports = app;
