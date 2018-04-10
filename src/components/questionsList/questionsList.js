import React, { Component } from 'react';
import './questionslist.css';
import data from '../../data'
class QuestionsList extends Component {
  constructor() {
    super()
    this.state = {
      data: data
    }
    console.log(data);
  }
  render() {
    return (
      <div className="questionsList">
        <div class="row">
          {this.state.data.map((question) => {
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
