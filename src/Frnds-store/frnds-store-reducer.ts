import ActionTYpe from "../common/ActionType";
import { Friend } from "./Friend";
import { SET_FRNDS_DETAILS } from "./frnds-store-constants";

interface Frnds{
    list : Friend[]
}


const initailState : Frnds = {
    list : [
        {
            name : 'Sofia jakson',
            profile_pic_img : 'image',
            date_of_birth : new Date('1999-10-10'),
            online : true
        },
        {
            name : 'Janull shrum',
            profile_pic_img : 'image',
            date_of_birth : new Date('1999-08-25'),
            online : true
        },
        {
            name : 'Alex Durden',
            profile_pic_img : 'image',
            date_of_birth : new Date('1999-08-25'),
            online : false
        }
    ]
}

const frndsReducer= (store =initailState, action: ActionTYpe) => {
    switch(action.type){
       case SET_FRNDS_DETAILS : {
          return {
            ...store,
            ...action.payload
          }
       }
       default : return store
    }

}

export default frndsReducer;

