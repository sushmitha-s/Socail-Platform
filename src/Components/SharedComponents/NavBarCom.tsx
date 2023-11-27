import { Container, Form, Nav, Navbar } from "react-bootstrap"
import image from '../../image.jpg';
import {  useNavigate } from "react-router-dom";

const NavBarCom = () => {
  const navigate=useNavigate();
   
 const profile = (event : any) =>{
   navigate('/profile');
 }

 const home = (event : any) =>{
  navigate('/home');
}

   return (
    <Navbar expand="lg" className="bg-body-tertiary" style={{padding: '0%'}}>
    <Container fluid style={{backgroundColor: 'rgba(75, 80, 233, 0.784)', padding :'0.5%' }}>
      <Navbar.Brand style={{marginRight:'14%'}} >New Socail</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
      <Form className="d-flex" style={{color:'black',backgroundColor  : 'white',width: '50%', 
      borderRadius:'20px'}}>
          <i className="bi bi-search" style={{alignSelf:'center',paddingLeft:'10px', paddingRight:'5px'}}/>
          <Form.Control placeholder="search for frnds,posts or any video" style={{borderStyle:'none',width:'70%'}}></Form.Control>
        </Form>
        <Nav
          className="me-auto my-2 my-lg-0"
          style={{ maxHeight: '100px' }}
          navbarScroll
        >
          <Nav.Link onClick={home}>Home Page</Nav.Link>
          <Nav.Link href="#">Timeline</Nav.Link>
          <Nav.Link> <i className="bi bi-bell" style={{color:'white'}}/></Nav.Link>
          <Nav.Link> <i className="bi bi-person-fill" style={{color:'white'}}/></Nav.Link>
          <Nav.Link> <i className="bi bi-chat-left-fill" style={{color:'white'}}/></Nav.Link>
          <Nav.Link onClick={profile}><img className='profileimg' src={image} alt="Profile Pic"></img></Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
   )
}

export default NavBarCom