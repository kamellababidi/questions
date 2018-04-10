import React, { Component } from 'react';
import './controller.css';
import { Button } from 'react-bootstrap';
class Controller extends Component {
  constructor() {
    super()
  }
  render() {
    return (
      <div className="controller">
        <div class="row">
          <div class="col-sm-6">
            <Button className="btn" bsStyle="primary" bsSize="large">
              PREV
            </Button>
          </div>
          <div class="col-sm-6">
            <Button className="ctn" bsStyle="primary" bsSize="large">
              NEXT
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

export default Controller;
