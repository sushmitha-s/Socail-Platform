import React from 'react';
import logo from './logo.svg';
import './App.css';
import configureStore from './Store/store';
import { Provider } from 'react-redux';
import { BrowserRouter,RouterProvider,Route, Routes} from 'react-router-dom';
import Register from './Components/Register/Register';
import Profile from './Components/Profile/Profile';
import home from './Components/Home/Home';
import Login from './Components/Login/Login';

const store=configureStore({});

function App() {

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
           <Route path='/login' Component={Login}></Route>
            <Route path='/register' Component={Register}></Route>
            <Route path='/profile' Component={Profile}></Route>
            <Route path='/home' Component={home}></Route>
            <Route path='*' Component={Login}></Route>
        </Routes>
      </BrowserRouter>
    </Provider>  
  );
}

export default App;
