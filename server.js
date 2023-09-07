if(process.env.NODE_ENV !== "production"){
    require('dotenv').config()
};
const express = require('express');
const helmet = require('helmet');
const app = express();
const cors = require('cors');
const PORT = process.env.PORT;
const routes = require('./routes');
const session = require('express-session');
const passport = require('passport');

require('./auth/passport')(passport);

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(session({
    secret: process.env.SECRET,
    resave: true,
    saveUninitialized: true
  }));
app.use(passport.initialize());
app.use(passport.session());

app.use(helmet.hidePoweredBy({ setTo: 'PHP 4.2.0' }));
app.use(helmet.frameguard({ action: 'sameorigin' }));

app.use(express.static(__dirname + '/public'));

app.use(routes);

require('./db/dbConnect');

app.listen(PORT, ()=>console.log(`The app listens... ${PORT}`));