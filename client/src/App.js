import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
// import Navbar from './components/Navbar'
// import Footer from './components/Footer'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from './components/Login/Login';
import SignUp from './components/Login/Signup';


function App() {
  return (<Router>
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">
          <Link className="navbar-brand" to={"/sign-in"}>Portfolio-Maker</Link>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to={"/sign-in"}>Login</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/sign-up"}>Sign up</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="auth-wrapper">
        <div className="auth-inner">
          <Switch>
            <Route exact path='/' component={Login} />
            <Route path="/sign-in" component={Login} />
            <Route path="/sign-up" component={SignUp} />
          </Switch>
        </div>
      </div>
    </div></Router>
  );
}

export default App;








// function App() {
//   return (
//     <>
//     <div className="App">
//       <h3>Build Sign Up & Login UI Template in React</h3>
//     </div>
//     <Navbar />
//     <Footer />
//     </>
//   );
// }

// export default App;