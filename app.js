/**
 * Module dependencies.
 */
const express = require('express');
const mongoose = require('mongoose');
const chalk = require('chalk');
const dotenv = require('dotenv');
const compression = require('compression');
const sass = require('node-sass-middleware'); 
const logger = require('morgan');
const bodyParser = require('body-parser');
const session = require('express-session');
const mongoStore = require('connect-mongo')(session);
const expressValidator = require('express-validator');
const passport = require('passport');
const lusca = require('lusca');
const path = require('path');
const errorHandler = require('errorhandler');
const favicon = require('serve-favicon');
const flash = require('express-flash');

/**
 * Load environment variables from .env file, where API keys and passwords are configured.
 */
dotenv.config();

/**
 * Controllers
 */

const userController = require('./controllers/user');

/**
 * Create Express server.
 */
const app = express();


/**
 * Connect to MongoDB.
 */
mongoose.Promise = global.Promise; // To enable Mongoose Async Operations
mongoose.connect(process.env.MONGODB_URI || process.env.MONGOLAB_URI);
mongoose.connection.on('connected', () => {
  console.log('%s MongoDB connection established!', chalk.green('✓'));
});
mongoose.connection.on('error', () => {
  console.log('%s MongoDB connection error. Please make sure MongoDB is running.', chalk.red('✗'));
  process.exit();
});

/**
 * Express configuration.
 */
app.set('port', process.env.PORT || 1000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
// app.use(expressStatusMonitor()); // Creates a status monitoring page
app.use(compression()); // not use of the utility...
app.use(sass({ // for scss & sass organized css file automatic generation
  src: path.join(__dirname, 'public/css'),
  dest: path.join(__dirname, 'public/css'),
  outputStyle: 'compressed',
  debug: true,
  prefix: '/css'
}));
app.use(logger('dev')); // Log Http Request
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(expressValidator());
app.use(session({
  resave: true,
  saveUninitialized: true,
  secret: process.env.SESSION_SECRET,
  store: new mongoStore({
    url: process.env.MONGODB_URI || process.env.MONGOLAB_URI,
    autoReconnect: true
  })
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash()); // should be replaced by a Angular Specific solution
app.use((req, res, next) => {lusca.csrf({
  cookie: "csrf_cookie",
  header: 'X-CSRFToken'
})(req, res, next);});// Security
app.use(lusca.xframe('SAMEORIGIN'));
app.use(lusca.xssProtection(true));
app.use((req, res, next) => { // make current user available in result
  res.locals.user = req.user;
  next();
});

app.use(express.static(path.join(__dirname, 'public'), { maxAge: 31557600000 }));
app.use(favicon(path.join(__dirname + '/public/media/favicon.png')));



/**
 * API Routes
 */

app.post('/api/user/signin', userController.postSignIn);

/**
 * Primariy Routes
 */

app.get('*', (req, res, next) => {
    res.render('main');
});

/**
 * Error Handler.
 */
app.use(errorHandler()); // Should not be used only in dev, to be removed

/**
 * Start Express server.
 */
app.listen(app.get('port'), () => {
  console.log('%s Express server listening on port %d in %s mode.', chalk.green('✓'), app.get('port'), app.get('env'));
});

module.exports = app;