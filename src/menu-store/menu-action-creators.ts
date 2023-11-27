import { set_MENU_DETAILS } from "./menu-store-constants"

export function SET_MENU_Items(data :any) {
    return{
            type : set_MENU_DETAILS,
            payload : {
                items : data
            }
    }
}

export function SET_More_But(data :any) {
    return{
            type : set_MENU_DETAILS,
            payload : {
                more_but : data
            }
    }
}

export function SET_Less_But(data :any) {
    return{
            type : set_MENU_DETAILS,
            payload : {
                less_but : data
            }
    }
}