import { Button, Container, Stack } from "react-bootstrap"
import MenuItem from "../../menu-store/MenuItem"
import { useDispatch, useSelector } from "react-redux"
import { SET_Less_But, SET_MENU_Items, SET_More_But } from "../../menu-store/menu-action-creators"
import { Friend } from "../../Frnds-store/Friend"
import image2 from '../../image2.jpg';

export const SideMenu=() => {
    const {menu} = useSelector((state : any) =>{return state})
  const {frnds} = useSelector((state : any) =>{return state})
  const dispatch= useDispatch();

  const showMoreBut= () => {
    var newItems : MenuItem[]= [];
    menu.items.forEach((each : MenuItem) => {
       if(each.def_visible){
        newItems.push(each)
       }
       else{
        newItems.push({...each,'visible': true})
       }
    });
    dispatch(SET_MENU_Items(newItems));
    dispatch(SET_More_But(false))
    dispatch(SET_Less_But(true))
  }

  const showLessBut= () => {
    var newItems : MenuItem[]= [];
    menu.items.forEach((each : MenuItem) => {
       if(each.def_visible){
        newItems.push(each)
       }
       else{
        newItems.push({...each,'visible': false})
       }
    });
    dispatch(SET_MENU_Items(newItems));
    dispatch(SET_Less_But(false))
    dispatch(SET_More_But(true))
  }


   return(
    <div>
    <Container>
         <Stack gap={3}>
          { menu.items.filter(function (each : MenuItem) {
              return each.visible
          }).map( (each : MenuItem ) => 
            <div><i className={`${each.icon_name}`} style={{paddingRight : '15px'}}/>{each.name}</div>   
          )}
         </Stack>
         {menu.more_but && <Button onClick={() => {showMoreBut()}} style={{marginTop: '20px'}}>Show More</Button>}
         {menu.less_but && <Button onClick={() => {showLessBut()}} style={{marginTop: '20px'}}>Show Less</Button>}
         </Container>
         <hr></hr>
         <Container>
           <Stack gap={3}>
             { frnds.list.map( (each : Friend) => 
                <div><img className='profileimg' src={image2} alt="Profile Pic" style={{marginRight:'10px'}}></img>{each.name}</div>
             )}
           </Stack>
         </Container>
     </div>
   )
}


