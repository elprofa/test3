import React,{Component} from 'react';
import Container from 'react-bootstrap/Container'
import {Row, Col,Card} from 'react-bootstrap'

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import WelcomeBack from './components/Formulaire/form.js';

import BackgroundWrap from "./components/Background";
import ColonneGauche from "./components/colonneGauche";





class App extends Component{
  render() {
    return (
      <BackgroundWrap fluid>
        <Card>
            <Row>
              <Col className="bg-light">
                <ColonneGauche />
              </Col>
              <Col><WelcomeBack /> </Col>
            </Row>
        </Card>
      </BackgroundWrap>
    )
  }
}

export default App;
