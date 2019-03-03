const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const path = require('path');
const logger = require('morgan');
const helmet = require('helmet');
const compression = require('compression');

var app = express();
var port = 3000;
const publicPath = path.join(__dirname, 'public');
const viewPath = path.join(__dirname, 'views');

//database
const db = ('./db/moongoose');

//routes
const indexRouter = require('./routes/index');
const catalogRouter = require('./routes/catalog');
const usersRouter = require('./routes/users');

//view engine
app.set('view', viewPath);
app.set('view engine', 'ejs');

//middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(logger('dev'));
app.use(cookieParser());
app.use(helmet());
app.use(compression());

app.use(express.static(publicPath));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/catalog', catalogRouter); 

//errors

// app.get('/', (req, res)=> {
//     res.send("Hello world");
// });

app.listen(port, function (){
    console.log('server is up and running');
});