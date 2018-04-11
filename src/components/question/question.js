import React, { Component } from 'react';
import './question.css';
class Question extends Component {
  constructor(props) {
    super(props)
    this.state = {
      question: this.props.selectedQuestions || []
    }
  }
  render() {
    return (
      <div className="question">
        <div className="qu">
          <h3>
            Question Number: {this.state.question.questionId}
          </h3>
          <hr/>
          <p>sadsssss</p>
        </div>
        <div className="qu">
        </div>
      </div>
    );
  }
}

export default Question;
