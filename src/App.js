import React,{Component} from 'react';
import {Row, Col} from 'react-bootstrap'
import Container from 'react-bootstrap/Container'

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import WelcomeBack from './components/Formulaire/form.js';

import BackgroundWrap from "./components/Background";
import ColonneGauche from "./components/colonneGauche";


class App extends Component{
  render() {
    return (
      
      <Container >
      <div  className="OmbreDuFormulaire">
      <BackgroundWrap>
      <Row>
          <Col>
             <ColonneGauche />
          </Col>
        
            <Col>
                <WelcomeBack />
            </Col>
        </Row>
        </BackgroundWrap>
        </div>
      </Container >
  
      
    )
  }
}

export default App;