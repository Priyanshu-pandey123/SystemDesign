

import React from 'react'
import Login from './Login';
import { Outlet } from 'react-router-dom';

const ProtectedRoute = ({children}) => {
    const auth=true;
  return (
    <div>
     
       
       {
        auth ? <Outlet/> :<Login/>
       }
   
   </div>
  )
}

export default ProtectedRoute