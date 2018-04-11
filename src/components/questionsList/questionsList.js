import React, { Component } from 'react';
import './questionslist.css';
import Question from '../question/question'
class QuestionsList extends Component {
  constructor(props) {
    alert("ssss")
    super(props)
    this.state = {
      questions: this.props.questions || [] ,
      question: this.props.questions[0]
    }
  }
  render() {
    var scope = this;
    return (
      <div className="questionsList">
        <div class="row">
          {this.state.questions.map((question) => {
            return (
              <div class="col-sm-2 qube" onClick={ () => scope.setState({ question: question }) }>
                <div className="element">
                  <p className="cubeNumber">{question.questionId}</p>
                </div>
              </div>
            )
          })}
        </div>
        <Question
          selectedQuestions = {scope.state.question}
        />
      </div>
    );
  }
}

export default QuestionsList;
