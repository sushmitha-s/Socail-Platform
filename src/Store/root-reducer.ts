import {combineReducers} from 'redux'
import masterReducer from '../mater-store/master-reducer';
import menuReducer from '../menu-store/menu-reducer';
import frndsReducer from '../Frnds-store/frnds-store-reducer';

const rootReducer =combineReducers({
    master : masterReducer,
    menu : menuReducer,
    frnds : frndsReducer
})

export default rootReducer;