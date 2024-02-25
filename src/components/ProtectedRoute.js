import React from 'react';
import { Navigate } from 'react-router-dom';


export default function ProtectedRoute({children,user}) {
  return(
    <>
        if(user){
            children
        }else{
            <Navigate to={'/'}></Navigate>
        }
    </>
  )
};
