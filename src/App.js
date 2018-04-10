import React, { Component } from 'react';
import './App.css';
import Header from './components/header/header'
import QuestionsList from './components/questionsList/questionsList'
import Question from './components/question/question'
import Controller from './components/controller/controller'
import data from './data'
class App extends Component {
  constructor() {
    super();
    this.state = {
      data : data,
      isMobile: window.innerWidth <= 500
    }
  }
  render() {
    return (
      <div className="App">
        <Header />
        <QuestionsList
          questions={this.state.data}
        />
        <Question />
        <Controller />
      </div>
    );
  }
}
export default App;
