import React from "react";
import Navbar from "./components/navbar"
import Header from "./components/header"
import AboutMe from "./components/aboutMe"
import Footer from "./components/footer"
import Projects from "./components/projects"
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <Router>
              <Header />
              <AboutMe />
              {/*<Projects />*/}
              <Footer/>
              <Switch>
             <Route path='/' exact />
              </Switch>
          </Router>
      </header>
    </div>
  );
}

export default App;
