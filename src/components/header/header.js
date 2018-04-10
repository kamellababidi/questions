import React, { Component } from 'react';
import { Line, Circle } from 'rc-progress';
import { Button } from 'react-bootstrap';
import './header.css';
class Header extends Component {
  render() {
    return (
      <header className="App-header">
      <div class="row">
        <div class="col-sm-8">
          <Line className="progressPar" percent="10" strokeColor="red" /><span>10%</span>
        </div>
        <div class="col-sm-4">
          <Button bsStyle="danger" bsSize="large">
            Resume
          </Button>
        </div>
      </div>

      </header>
    );
  }
}

export default Header;
