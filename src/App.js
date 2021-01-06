import React,{Component} from 'react';
import {Row, Col} from 'react-bootstrap'

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import WelcomeBack from './components/Formulaire/form.js';

import BackgroundWrap from "./components/Background";
import ColonneGauche from "./components/colonneGauche";


class App extends Component{
  render() {
    return (
      <BackgroundWrap fluid>
        <div  className="OmbreDuFormulaire">
          <Row>
            <Col>
            <ColonneGauche>
              
            </ColonneGauche>
            </Col>
            <Col>1 of 1</Col>
          </Row>
        </div>
      </BackgroundWrap>
    )
  }
}

export default App;