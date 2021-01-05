import React,{Component} from 'react';
import {Row, Col} from 'react-bootstrap'

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import BackgroundWrap from "./components/Background";
import ColonneGauche from "./components/colonneGauche";
import imgColonne from './imgColonne.jpg';


class App extends Component{
  render() {
    return (
      <BackgroundWrap fluid>
        <Row>
          <Col>
           <ColonneGauche>
             
           </ColonneGauche>
          </Col>
          <Col>1 of 1</Col>
        </Row>
      </BackgroundWrap>
    )
  }
}

export default App;
