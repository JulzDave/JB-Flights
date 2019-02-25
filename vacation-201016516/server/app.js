var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require('express-session') 

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var profile = require('./routes/profile');

var app = express();
 
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
}))



// app.use(function (req, res, next) {
//   console.log(req.session.username)
  
// })

const io = require('socket.io')();

io.on('connection', (client) => {
    client.on('subscribeToData', async () => {
        
        let getsql = await pool.query(`SELECT * FROM vacationproj.deals`)
        io.emit('data', getsql);        
    });
});

const port = 8000;
io.listen(port);
console.log('listening on port ', port);





app.use('/profile', profile);

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

module.exports = app;
