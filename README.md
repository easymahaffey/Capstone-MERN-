# Application Set-up

This project is H. "Easy" Mahaffey's ( ADC# 319173 ) capstone project for the Persevere Code Camp Program.

The details below are provided to install and setup the capstone.

## Installing Node Modules

### Initialize project by creating a `package.json` file in your project directory. Use the terminal window pointing to the project directory.

*Example C:\Users\Desktop\projectdirectory*

```
npm init -y
```

*Install the necessary node module packages for the project server*

```
npm i express express-session bcryptjs reactstrap axios cors mongoose helmet
```

*Install dependencies*

```
npm i -D nodemon dotenv concurrently
```

## Set-up Environment

### Create the `.gitignore` file
*Add the code below*

**This is the completed `.gitignore` file.**

```
.env
node_modules
```

### Create the `.env` file

*Creates TCP/IP port assignment and database name*
*Add the code below*

**This is the completed `.env` file**

```
PORT=8080
MONGO_URI=mongodb://localhost/capstone
SECRET=secret
```

## Create Server `server.js`

### Next create the server.js file located in the same root directory as the files above and add the following code:

```
if(process.env.NODE_ENV !== 'production'){
    require('dotenv').config()
};
```

*The add the code below to create the needed node variables and makes their functions available to other back-end server functions.*

```
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
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(session({
    secret: process.env.SECRET,
    resave: true,
    saveUninitialized: true
  }));
app.use(passport.initialize());
app.use(passport.session());

app.use(helmet.hidePoweredBy({ setTo: 'PHP 4.2.0' }))
app.use(helmet.frameguard({ action: 'sameorigin' }))
```

*The code below lets your assets see index.html in root directory*

```
app.use(express.static(__dirname + '/public'))
```

*Then connect the routes. Not necessary when testing initial static html file connect with database*

```
app.use(routes)
```

*Below connects the database*

```
require("./db/dbConnect");
```

*Start/open TCP/IP port on server from the `port` assignment made in the `.env` file.*

```
app.listen(PORT, ()=>console.log(`app listens on port ${PORT}`))
```

**Here is the Completed Server file with routes included `server.js`**

```
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
```

## The Client Side

### Initialize the `client` for the project by creating a `package.json` file in your client directory of the project directory. Use the terminal window pointing to the client directory.

*Example C:\Users\Desktop\project_directory\client_directory*

```
npm init -y
```

*Install the necessary node module packages for the client*

```
npm i axios, bootstrap, react, react-dom, react-redux,react-router-dom, react-scripts, reactstrap, redux, redux-thunk
```

## Create the REACT HTML file

### The html file for the React portion of the project is in the public folder.

*Example: projectdirectory/client/public/index.html*

**Here is the `index.html` file**

```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>React Capstone</title>
  </head>
  <body>
    <div id="root"></div>
  </body>
</html>
```

### Create the index.js file for the react client in client directory's source directory

*Example: project_directory/client/src/index.js*

**Here is the completed `index.js` file**

```
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { Provider } from 'react-redux'
import store from './redux/store'
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'

ReactDOM.render(<Provider store={store} ><App /></Provider>, document.getElementById("root"))
```

### Create the App.js file for the react client in client directory's source directory

*Example: project_directory/client/src/App.js*

**Here is the completed `App.js` file**

```
import React, { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./components/siteComponents/Navbar";
import FinalLandingPage from "./components/siteComponents/FinalLandingPage";
import LandingPage from "./components/siteComponents/LandingPage";
import Projects from "./components/projectComponents/Projects";
import QuoteBox from "./components/projectComponents/QuoteBox/QuoteBox";
import About from "./components/siteComponents/About";
import Contact from "./components/siteComponents/Contact";

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Navbar />
          <Switch>
            <Route
              exact
              path="/"
              component={
                this.props.isAuthorized ? FinalLandingPage : LandingPage
              }
            />
            <Route path="/projects" component={Projects} />
            <Route path="/quotebox" component={QuoteBox} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isAuthorized: state.auth.isAuthorized,
  };
};

export default connect(mapStateToProps, null)(App);
```

## Create the Database

### Create the database folder in the root directory, then create the `dbConnect.js` file.

**The Database name was set above in the `.env` file with MONGO_URI to `capstone`.**

**Mongo is used to create a NoSQL database**

**Mogoose is used to view the data**

First add this code to the `dbConnect.js` file.

**This is a completed dbConnect file.**

```
const mongoose = require('mongoose')

mongoose.connect(process.env.MONGO_URI,
    ()=>console.log("Mongoose is connected")
    )
```

### Next create a models folder <u>in the database folder</u> for model files beginning with a capital letter. Mongo's uses 'models' to define the database fields.

*Example: /db/models/Members.js.*

Now add your database model code to your model file.

**This is a completed model file.**

```
const mongoose = require("mongoose");

var MemberSchema = new mongoose.Schema({
  firstName: { type: String, require: true, maxLength: 100 },
  lastName: { type: String, require: true, maxLength: 100 },
  date_member_joined: { type: Date, default: Date.now() },
  email: { type: String, require: true, unique: true, trim: true },
  password: { type: String, require: true, trim: true },
  isAuthorized: { type: Boolean, default: false },
  address1: { type: String, trim: true },
  address2: { type: String, trim: true },
  city: { type: String, require: true, trim: true },
  State: { type: String, require: true, trim: true },
  zipCode: { type: String, trim: true },
});

const Member = mongoose.model("Member", MemberSchema);

module.exports = Member;
```

## Create Routes `index.js`

### Next create a index.js file in the <u>Routes Folder</u> in the root directory. Example: project_directory/routes/index.js.

*Now add the code for the primary route file (index.js). This file contains the master routes for additional routes divided up by the area of their responsibility.*

**This is the completed primary route file `index.js`**
```
const router = require('express').Router();
const landingLayoutRoutes = require('./landingLoginRoutes');
const userAccountRoutes = require('./userAccountRoutes');

router.use('/', landingLayoutRoutes)
router.use('/', userAccountRoutes)

module.exports = router;
```
## REACT Components

### * * Projects * *

**Individual projects are in the source `src ` folder in the client area.**

```
Currently there is only one project, the Quotebox.
```

* * *
* * *

## USER STORIES

**These are the User Stories/ MVC Goals**

```
[Complete] - The application should be a full MERN stack site, using Mongodb/Mongoose Express React and Node.

[Complete] - My node.js express server should employ helmet.js.

[Complete] - The application should use Port 3000 and the server should use port 8080.

[Complete] - When a user arrives at the site they should be presented with a form to log-in to the site with a username and password field. There should also be a button to open a separate modal, where a user will be able to create a new account.

[Complete] - A user should be required to create a secure password of at least 6 characters including at least one number and one symbol.

[Complete] - The user's password should be hashed and salted with bcrypt.js.

[Complete] - The user not be able to access the secure parts of the site if they are not logged in.

[Complete] - If a user commits an error while logging in, the site should display and appropriate error message. For example if a user enters an incorrect password a error message alert or modal should appear on the site.

[Complete] - Once a user has logged in, they should arrive at a home page, that greets the user by username. This page should also contain a button to a edit profile modal, and the site's main functionality. For example a game, a todolist, a message board, or a value converter.

[Complete] - On the edit Profile modal, a user should be able to update their password and user information.

[Complete] - The edit profile modal should also offer an option to delete a account only after displaying a warning to a user that all data will be removed. This alert should be confirmed by entering the word DELETE in a text field or by selecting a delete or cancel button. Once an account is deleted the user should be redirected to the create an account landing page.

[Complete] - The application will follow a MVC design pattern.

[Complete] - All of the application's routes will be organized by type.

[Complete] - The application should have a navigation bar that is always accessible on all screen sizes.

[Complete] - All CSS will be well organized and in a modular format based on className.

[Complete] - While adding or deleting data, I should do so on a modal.

[Complete] - Both landing pages, the public and the secure, should be well designed and well styled.

[Complete] - The application should be well styled/size responsive on all major screen sizes. Ex:  Desktop, Tablet and Phone.

[Complete] - If I need to communicate between my React app and my server I will use Axios.

[Complete] - My React app will be called "client" and will be in a separate folder on top of my server and my routes.

[Complete] - The site should prevent the client from trying to guess(sniff) the MIME type.

[Complete] - The site should prevent cross-site scripting (XSS) attacks.

[Complete] - The site's server will not allow DNS prefetching.

[Complete] - The site will only be allowed to load onto an iframe with its own pages.

[Complete] - The site should show that it is powered by 'PHP 4.2.0', even though it isn't, as a security measure.

[Complete] - Any secret keys or server variables, such as port or mongodb variables should be stored in an .env file.  These variables should only be usable in a development environment. If the environment is production the site should use the variables indicated by the host.

[Complete] - The application should contain a .gitignore file that will ignore your node_modules and your .env file.

- All node modules should be removed before handing in the finished project.

- Any extraneous modules should be removed from the package.json dependencies.

[Complete] - The application should include a professional README.md that outlines a summary of the project, how to setup/use the site, and all the technologies/languages used. There should be at least one embedded image.
```

**Extras Credit**

```
- The React app has a separate admin login that leads to a secured admin area.

- The admin username is "admin" and the password is "password".

- From the admin area a component of the app can be changed or administered(such as a score reset or a todolist wiped clean).
```

* * *
* * *

## Future Enhancements

### There is a need to add additional administrative functions noted in the extra credit.

* Additional Projects Planned:
  * Media query support for the Navbar on mobile devices.
  * A Drum (Sound) Machine
  * A Post application

