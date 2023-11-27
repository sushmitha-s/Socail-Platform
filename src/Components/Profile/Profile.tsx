import { Col, Container, Row, Stack } from "react-bootstrap";
import NavBarCom from "../SharedComponents/NavBarCom";
import { SideMenu } from "../SharedComponents/SideMenu";
import { PostCom, WritePost } from "../SharedComponents/SharedMainCom";
import profileimg from '../../profilepic.jpg';
import image2 from '../../image2.jpg';
import image from '../../image.jpg';
import './Profile.css'
import { useSelector } from "react-redux";
import { Friend } from "../../Frnds-store/Friend";
import { useFetcher } from "react-router-dom";
import { useEffect } from "react";

const Profile = () =>{
  const {master} = useSelector((state : any) =>{return state})
  const {frnds} = useSelector((state : any) =>{return state})
  useEffect( () => {
    console.log(frnds);
  },[])
    return(
      <div>
        <NavBarCom></NavBarCom>
        <Container style={{margin: '0',maxWidth: '1500px'}}>
          <Row>
            <Col sm={3}>
               <SideMenu/>
            </Col>
            <Col sm={9}>
               <Row>
               <a style={{position : 'relative',display:'inline-flex'}}><img className='proimg' src={profileimg} alt="Profile Pic"></img>
                <img src={image} className="absimg"></img>
                </a>
               
               <h3 style={{textAlign: 'center',marginTop:'50px'}}>{master.user.username}</h3>
               <p style={{textAlign: 'center'}}>{master.user.bio}</p>
               
               </Row>
               <Row>
                  <Col sm={8}>
                  <Container className="con1">
                     <WritePost></WritePost>
                   </Container>
                  <Container className="con2">
                    <PostCom></PostCom>
                  </Container>
                  </Col>
                  <Col sm={4}>
                  <Stack gap={1}>
                     <h5>User Information</h5>
                     <p>City : {master.user.city}</p>
                     <p>From : {master.user.from}</p>
                     <p>Relationship : {master.user.relationship}</p>
                     </Stack>
                    <h5>Your Friends</h5>
                     <Stack direction="horizontal">
                        {frnds.list.map((each : Friend) => {
                          return(<div>
                           <img className="frndimg" src={image2} alt="Profile Pic"></img>
                           <div>{each.name}</div>
                           </div>)
                        })}
                     </Stack>
                  </Col>
               </Row>
            </Col>
          </Row>
        </Container>
        </div>
      )
}

export default Profile;