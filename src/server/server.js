const express = require('express');

const app = express();

const port = process.env.PORT || 5000;

var userController=require('./controllers/userController');
var homeController=require('./controllers/userController');
var cookieParser = require('cookie-parser');
var configCommon = require('./models/db');
var validateRequest = require('./middleware/validateRequest');
var configRoute =require('./middleware/configRouter');
var mongoose = require('mongoose');
mongoose.connect(configCommon.url,{ useNewUrlParser: true });
var session = require('express-session');
var MongoStore = require('connect-mongo')(session);
var db = mongoose.connection;
app.set('superSecret', configCommon.secret);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.all('/*', configRoute);
app.all('/api/*', [validateRequest]);

userController(app);
homeController(app);
app.use(function(req, res, next) {
    next(createError(404));
  });
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
  
    // render the error page
    res.status(err.status || 500);
    res.render('error');
  });
  app.use(session({
    secret: 'wordhard',
    resave: true,
    saveUninitialized: false,
    cookie: {  },
    store: new MongoStore({
        mongooseConnection: db
    })
}));
app.listen(port, () => console.log(`🚀 Server is running at port ${port}`));
