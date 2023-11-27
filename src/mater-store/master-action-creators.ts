import {set_USER_DETAILS} from '../mater-store/master-store-constands'

export function SET_USER(data :any){
    return{
            type : set_USER_DETAILS,
            payload : {
                user : data
            }
    }
}
