import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
// import Header from './components/Header.js';
import AboutMe from './components/AboutMe.js';
import Portfolio from './components/Portfolio.js';
import Contact from './components/Contact.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Header /> */}
        <AboutMe />
        <Portfolio />
        <Contact />
      </div>
    );
  }
}

export default App;
