import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import image2 from '../../image2.jpg';
import birthImage from '../../BirthImages.jpg'
import './Home.css'
import { Row,Col,Stack } from "react-bootstrap";
import { Friend } from "../../Frnds-store/Friend";
import { SideMenu } from "../SharedComponents/SideMenu";
import { WritePost ,PostCom} from "../SharedComponents/SharedMainCom";
import NavBarCom from "../SharedComponents/NavBarCom";


const Home = () =>{

  const dispatch= useDispatch();
  const {master} = useSelector((state : any) =>{return state})
  const {menu} = useSelector((state : any) =>{return state})
  const {frnds} = useSelector((state : any) =>{return state})
  const navigate =useNavigate();
  const [todayBirths,setTodayBirths] = useState<String[]>([]);
  const today=new Date();
  var BirthStr= '';

  useEffect(() => {
    console.log(master);
    console.log(menu);
    console.log(frnds)
  }, [master,menu])

  useEffect(() =>{
    //  todayBirths.splice(0,todayBirths.length);
    setTodayBirths([]);
     frnds.list.forEach( function(each : Friend) {
        if(each.date_of_birth.getMonth()==today.getMonth() && each.date_of_birth.getDate()==today.getDate())
        {
          todayBirths.push(each.name);
        }
     })
     console.log(todayBirths)
     console.log(todayBirths.length)
     Birthfun();
  },[frnds])

  useEffect(() =>{
    //todayBirths.splice(0,todayBirths.length);
    setTodayBirths([]);
    frnds.list.forEach( function(each : Friend) {
       if(each.date_of_birth.getMonth()==today.getMonth() && each.date_of_birth.getDate()==today.getDate())
       {
         todayBirths.push(each.name);
       }
    })
    console.log(todayBirths)
    console.log(todayBirths.length)
    Birthfun();
 },[])


  const Birthfun= () =>{
    console.log('birth function')
    if(todayBirths.length ==0)
    {
      return <div>No Birthdays Today</div>
    }
    else if(todayBirths.length==1)
    {
      return <div><b>{todayBirths[0]}</b>'s Birthday Today</div>
    }
    else{
      return <div><b>{todayBirths[0]}</b> and <b>{todayBirths.length-1}</b> Others have a Birthday Today</div>
    }
  }
 
  return(
    <div>
      <NavBarCom></NavBarCom>
   <Container style={{margin: '0',maxWidth: '1500px'}}>
     <Row>
       <Col style={{paddingTop:'1%'}}> 
         <SideMenu></SideMenu>
       </Col>
       <Col xs={6}> 
         <Container className="con1">
            <WritePost></WritePost>
         </Container>
         <Container className="con2">
           <PostCom></PostCom>
         </Container>
       </Col>
       <Col> 
          {Birthfun()}
          <img src={birthImage} alt="BirthDay Wishes" style={{margin: '5%',borderRadius:'10px'}}></img>
          <Container>
            <h4>Online Friends</h4>
            <Stack gap={3}>
             { frnds.list.filter(function (each : Friend) {
              return each.online
             }).map( (each : Friend) => 
                <div>
                 <a style={{position : 'relative',display:'inline-flex'}}><img className='profileimg' src={image2} alt="Profile Pic" style={{marginRight:'10px'}}></img>
                <i  className="bi bi-dot" style={{color :'#45b145',position : 'absolute',fontSize: '50px',left:'6px',bottom:'1px'}}/>
                </a>
                {each.name}</div>
             )}
           </Stack>
          </Container>
       </Col>
     </Row>
   </Container>
      </div>
  )
}

export default Home;