import { Button, Col, Container, Form, Row, Stack } from "react-bootstrap"
import image from '../../image.jpg';
import { useSelector } from "react-redux";
import postimage from '../../image3.jpg';

export const PostCom= () => {
    const {master} = useSelector((state : any) =>{return state})
    return (
            <Stack>
             <div>
              <Container><Row>
             <Col sm={1}><img className='profileimg' src={image} alt="Profile Pic"></img></Col> 
             <Col sm>{master.user.username} </Col>
             <Col sm>5 mins ago</Col>   
             <Col sm={{span:1,offset:5}}><i className="bi bi-three-dots-vertical" style={{paddingRight:'40%'}}/></Col>
             </Row></Container>
             </div>
             <div style={{padding: '2%'}}>This Post Comment</div>
             <div><img className="postimg" src={postimage} alt="Post pic"></img></div>
           </Stack>
    )
}

export const WritePost = () =>{
    const {master} = useSelector((state : any) =>{return state})
    return (
        <div>
            <div style={{display:'inline-flex'}}>
              <img className='profileimg' src={image} alt="Profile Pic"></img> 
              <Form>
                <Form.Control placeholder={`What's in your Mind ${master.user.username}?`} style={{borderStyle:'none'}}></Form.Control>
              </Form>
            </div>
            <hr></hr>
            <Container><Row>
               <Col className="p-2"><i className="bi bi-folder2" style={{color:'orange'}}/>Photo or video</Col>
               <Col className="p-2"><i className="bi bi-caret-right-fill" style={{color:'blue'}}/>Tag</Col>
               <Col className="p-2"><i className="bi bi-geo-alt-fill" style={{color:'green'}}/>Location</Col>
               <Col className="p-2"><i className="bi bi-emoji-smile-fill" style={{color:'yellow'}}/>Feelings</Col>
               <Col ><Button style={{color:'blue'}}>Share</Button></Col>
            </Row></Container>
        </div>
    )
    
}