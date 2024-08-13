

import React from 'react'
import Login from './Login';
import { Outlet } from 'react-router-dom';

const ProtectedRoute = ({children}) => {
    console.log(children,'form protected routes');
    const auth=false;
  return (
    <div>
     
       
       {
        auth ? <Outlet/> :<Login/>
       }
   
   </div>
  )
}

export default ProtectedRoute