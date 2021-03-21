import logo from './logo.svg';
import './App.css';
import Login from './login'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Home from './home'
import Dashboard from './Dashboard'
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  // const [loggedIn, setLoggedIn] = useState(false);
  // const [email, setEmail] = useState(undefined);
  const signupHandler = (email, password) => {
    loginOrSignup('http://localhost:9000/signup', email, password);
  };
  const loginHandler = (email, password) => {
    loginOrSignup('http://localhost:9000/login', email, password);


  };
  const loginOrSignup = (url, email, password) => {
    fetch(url, {
      method: "POST",
      body: JSON.stringify({ email: email, password }),
      headers: {
        "Content-Type": "application/json",
      }
    }).then((r) => {
        console.log("r::: ", r);
        window.location.pathname = '/Dashboard';

      }).catch((e)=>{
        console.log('e: ', e);
      })
  }
  return (
      <Router> 
      <div>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/login' component={Login} ><Login signupHandler={signupHandler} loginHandler={loginHandler} /></Route>
         <Route exact path='/dashboard' component={Dashboard} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
