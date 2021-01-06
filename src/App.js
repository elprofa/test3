import React,{Component} from 'react';
import {Row, Col} from 'react-bootstrap'

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import WelcomeBack from './components/Formulaire/form.js';

import BackgroundWrap from "./components/Background";


class App extends Component{
  render() {
    return (
      <BackgroundWrap fluid>
        <Row>
          <Col>1 of 1</Col>
          <Col><WelcomeBack /></Col>
        </Row>
      </BackgroundWrap>
    )
  }
}

export default App;