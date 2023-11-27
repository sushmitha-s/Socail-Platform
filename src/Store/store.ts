import { applyMiddleware, createStore } from 'redux'
import thunkMiddleware from 'redux-thunk'
//import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";

import rootReducer from '../Store/root-reducer';

const configureStore = (preloadedState: any) => {
    const middlewares = [thunkMiddleware]
    const middlewareEnhancer = applyMiddleware(...middlewares)

    // const enhancers = [middlewareEnhancer]
    // const composedEnhancers = composeWithDevTools(...enhancers)

    const store = createStore(rootReducer, preloadedState, middlewareEnhancer)

    // if (process.env.NODE_ENV !== 'production' && module.hot) {
    //     module.hot.accept('./root-reducer', () => store.replaceReducer(rootReducer))
    // }

    return store;
}


export default configureStore;
