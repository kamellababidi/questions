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
      isMobile: window.innerWidth <= 500,
      selectedQuestions: data[0]
    }
  }
  selectQuestion (question) {
    alert(question);
    console.log(question);
    this.setState({
      selectedQuestions: question
    })
  }
  render() {
    return (
      <div className="App">
        <Header />
        <QuestionsList
          questions = {this.state.data}
          selectQuestion = { this.selectQuestion.bind(this) }
        />
        
        <Controller />
      </div>
    );
  }
}
export default App;
