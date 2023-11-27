import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './login.css';
import { useEffect } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { SET_USER } from '../../mater-store/master-action-creators';
import { Link, useNavigate } from 'react-router-dom';
import home from '../Home/Home';

const Login = () =>{
  const dispatch = useDispatch();
  const { master} = useSelector((state: any) =>{return state} );
  const navigate=useNavigate();
 
  useEffect(() => {
    console.log(master);
  }, [master])
  
  const logInSubmit = (event :any) =>{
    event.preventDefault();
    console.log(event.target);
    dispatch(SET_USER({email : event.target.email.value, password: event.target.password.value , username: "UserName", bio : "User Bio",
     city : "city", from : "from", relationship: "relatoionship"}))
    navigate('/home');
  }

  return(
    <div className="log">
    <div className="left">
      <h2 style={{color: "blue" , marginBlockEnd: "0"}}>NewSocial</h2>
      <p style={{marginBlock:0}}>Connect with friends and the world aroung you on NewSocial</p>
    </div>
    <div className="right">
    <Form onSubmit={logInSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="email" placeholder="Email" name="email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control type="password" placeholder="Password" name="password" />
     </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    <Link to='/register'>Forget Password</Link>
     <br></br>
     <Link to='/register'><Button variant="primary">create a new account</Button></Link>
    </div>
    </div>
  )
}

export default Login;