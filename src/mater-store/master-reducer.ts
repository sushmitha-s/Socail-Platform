import ActionTYpe from "../common/ActionType";
import {GET_USER_DETAILS,set_USER_DETAILS} from '../mater-store/master-store-constands'

interface Master{
    user : {}
}
const initialState: Master= {
    user : {username : '',
    email : '',
    password : '',
    bio : '',
    city : '',
    from : '',
    relationshio : ''}
}

const masterReducer = (store = initialState,action : ActionTYpe) => {
     switch(action.type){
        case set_USER_DETAILS: {
            return {
                ...store,
                ...action.payload
            }
        }
        default : return store
     }
}

export default masterReducer;