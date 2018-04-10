import React, { Component } from 'react';
import './App.css';
import Header from './components/header/header'
class App extends Component {
  constructor() {
    super();
    this.state = {
      isMobile: window.innerWidth <= 500
    }
  }
  render() {
    return (
      <div className="App">
        <Header />
      </div>
    );
  }
}
export default App;
