import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar(props) {
  return (
    <>
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <Link className="navbar-brand" to='/'>{props.title}</Link>
    <form className="d-flex">
    <div className={`form-check form-switch text-${props.mode === 'dark'?'light':'dark'}`}>
    <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" onClick={props.toogleMode} />
     <label className="form-check-label" htmlFor="flexSwitchCheckDefault">DarkMode</label>
    </div> 
    </form>
    
  </div>
</nav>
    </>
  )
}

