import React from 'react'; 
import { Form } from 'react-bootstrap';
import { AiFillFacebook, AiOutlineBehance, AiOutlineTwitter } from "react-icons/ai";
import { FaDribbble, FaInstagram, FaPinterestP } from 'react-icons/fa';
import { Voiture } from './form.stc';
import BtnSubmit from '../Button'


const WelcomeBack = () => {
    return (
        <Form className="inscription p-3">
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

  <BtnSubmit title='Login' />
      <br/>
      <div className="float-right">
        <span className="m-2"><AiFillFacebook size={20} /></span>
        <span className="m-2"><AiOutlineTwitter size={20} className="icons-font"/></span>
        <span className="m-2"><FaInstagram size={20} /></span>
        <span className="m-2"><FaDribbble size={20} className="icons-font"/></span>
        <span className="m-2"><FaPinterestP size={20} className="icons-font"/></span>
        <span className="m-2"><AiOutlineBehance size={20} className="icons-font"/></span>
      </div>
</Form>
    );
}

export default WelcomeBack