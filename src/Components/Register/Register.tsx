import Form from 'react-bootstrap/Form';
import Col from "react-bootstrap/Col";
import Button from 'react-bootstrap/Button';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { SET_USER } from '../../mater-store/master-action-creators';
import {useEffect} from 'react'
import './Register.css'

const Register = () => {
   const dispatch= useDispatch();
   const {master} = useSelector((state : any) =>{return state})
   const navigate =useNavigate();

   useEffect(() => {
     console.log(master);   
   }, [master])
   
    const registerSubmit = (event : any) =>{
        event.preventDefault();
        dispatch(SET_USER({email : event.target.email.value, password: event.target.password.value , 
          username : event.target.username.value,bio : event.target.bio.value}))
        navigate('/home')
    }
  
    return(
      <div className="reg">
      <div className="left">
        <h2 style={{color: "blue" , marginBlockEnd: "0"}}>NewSocial</h2>
        <p style={{marginBlock:0}}>Connect with friends and the world aroung you on NewSocial</p>
      </div>
      <div className="right">
      <Form onSubmit={registerSubmit} className="rounded p-4 p-sm-3">
          <Col sm="10">
            <Form.Control name="username" type="username" placeholder="Username" />
          </Col>
          <Col sm="10">
            <Form.Control name="bio" type="username" placeholder="Add your Bio" />
          </Col>
          <Col sm="10">
            <Form.Control name="city" type="username" placeholder="Add your City" />
          </Col>
          <Col sm="10">
            <Form.Control name="from" type="username" placeholder="You are from" />
          </Col>
          <Col sm="10">
            <Form.Control name="relationship" type="username" placeholder="Your Relationship Status" />
          </Col>
          <Col sm="10">
            <Form.Control name="email" type="email" placeholder="Email" />
          </Col>
          <Col sm="10">
            <Form.Control name="password" type="password" placeholder="Password" />
          </Col>
          <Col sm="10">
            <Form.Control name="passwordagain" type="password" placeholder="PasswordAgain" />
          </Col>
          <Button variant="primary" type="submit">Sign Up</Button>
      </Form>
      <Link to='/login'><Button variant="primary">LogIn to Account</Button></Link>
      </div>
      </div>
      )
}

export default Register;