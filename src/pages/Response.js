import { signOut } from 'firebase/auth';
import React from 'react'
import { database } from '../components/FirebaseConfig';

export default function Response() {
  function handleClick() { 
    signOut(database).then(()=>{
      console.log(signOut)
    })
   }
  return (
    <>
      <button className='btn btn-primary' onClick={handleClick}>SIGN OUT</button>
    </>
  )
}
