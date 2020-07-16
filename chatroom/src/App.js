import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Join from './Components/Join/Join';
import Room from './Components/Room/Room';

class App extends Component {
  constructor(props){
    super(props);
  }


  render () {
  return (
    <React.Fragment>
      <div className="App">
        <Header/> 
        <Router>
          <Route path="/" exact component={Join} />
          <Route path="/chat" component={Room} />
        </Router>
        <Footer/>
      </div>
    </React.Fragment>
  );
  }
}

export default App;
