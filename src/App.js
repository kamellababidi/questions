import React, { Component } from 'react';
import './App.css';
import Header from './components/header/header'
import QuestionsList from './components/questionsList/questionsList'
import Question from './components/question/question'
import Controller from './components/controller/controller'
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
        <Question />
        <Controller />
      </div>
    );
  }
}
export default App;
