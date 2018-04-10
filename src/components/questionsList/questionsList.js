import React, { Component } from 'react';
import './questionslist.css';
class QuestionsList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      questions: this.props.questions || []
    }
    console.log(this.state.questions,"llll");
  }
  render() {
    return (
      <div className="questionsList">
        <div class="row">
          {this.state.questions.map((question) => {
            return (
              <div class="col-sm-2 qube">
                <div className="element">
                  <p className="cubeNumber">{question.questionId}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    );
  }
}

export default QuestionsList;
