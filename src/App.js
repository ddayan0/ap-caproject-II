import React from 'react';
import 'bootswatch/dist/darkly/bootstrap.min.css'; 
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Main from './containers/Main'
import Resume from './containers/Resume'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Academics from './containers/Academics'
import Skills from './containers/Skills'
import Interests from './containers/Interests'
function App() {
  return (
    <div>
        <Router>
            <div className="someThing">
                <NavBar/>
                <div className="content">
        <Switch>
            <Route exact component={Main} path="/"/>
            <Route path="/resume" component={Resume} />
            <Route path="/academics" component={Academics}></Route>
            <Route path="/skills" component={Skills}></Route>
            <Route path="/interests" component={Interests}></Route>
            {/* <Route path="/engineering" component={Home} />
            <Route path="/tsa" component={Home} />
            <Route path="/cyberpatriot" component={Home} /> */}
        </Switch>
                </div>
        <Footer/>
            </div>
        </Router>
    </div>
    
  );
}

export default App;
