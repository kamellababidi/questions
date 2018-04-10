import React, { Component } from 'react';
import './App.css';
import Header from './components/header/header'
import QuestionsList from './components/questionsList/questionsList'
class App extends Component {
  constructor() {
    super();
    this.state = {
      isMobile: window.innerWidth <= 500
    }
  }
  render() {
    return (
      <div className="container-fluid App">
        <Header />
        <QuestionsList />
      </div>
    );
  }
}
export default App;
