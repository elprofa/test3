import React,{Component} from 'react';
import {Row, Col} from 'react-bootstrap'

import './App.css';
import Title from './components/colonneGauche/Title';
import 'bootstrap/dist/css/bootstrap.min.css';

import BackgroundWrap from "./components/Background";

class App extends Component{
  render() {
    return (
      <BackgroundWrap fluid>
        <Row>
          <Col>1 of 1</Col>
          <Col>1 of 1</Col>
        </Row>
      </BackgroundWrap>
    )
  }
}

export default App;
