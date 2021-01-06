import React from 'react'; 
import { Form, Button } from 'react-bootstrap';
import { AiFillFacebook, AiOutlineBehance, AiOutlineTwitter } from "react-icons/ai";
import { FaDribbble, FaInstagram, FaPinterestP } from 'react-icons/fa';
import { Voiture } from './form.stc';


const WelcomeBack = () => {
    return (
        <Form className="inscription p-5">
            <Voiture/>
  <div className="title"><h4>Welcome Back</h4><br></br>
  <p>Un autre block de text</p></div>
  
  <Form.Group controlId="formGridAddress1">
    <Form.Label className="name">Username</Form.Label>
    <Form.Control className="input-group mb-3" type="text" placeholder="Enter Username" />
  </Form.Group>

  <Form.Group controlId="formGridAddress2">
    <Form.Label className="name">Password</Form.Label>
    <Form.Control className="handle-form" type="password" placeholder="Enter Password" />
    <span className="text-forget pt-2">Forget password?</span>
  </Form.Group>

  <Button variant="primary" type="submit" className="btn-sm btn-block btn-danger" >
    Login
  </Button>
      <br/>
      <div className="icon-font">
        <span className="icons-font"><AiFillFacebook size={40} /></span>
        <span className="icons-font"><AiOutlineTwitter size={40} className="icons-font"/></span>
        <span className="icons-font"><FaInstagram size={40} /></span>
        <span className="icons-font"><FaDribbble size={40} className="icons-font"/></span>
        <span className="icons-font"><FaPinterestP size={40} className="icons-font"/></span>
        <span className="icons-font"><AiOutlineBehance size={40} className="icons-font"/></span>
      </div>
</Form>
    );
}

export default WelcomeBack