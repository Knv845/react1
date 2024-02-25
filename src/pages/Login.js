import { signInWithEmailAndPassword } from 'firebase/auth';
import {useState} from 'react'
import { Link } from 'react-router-dom';
import { database } from '../components/FirebaseConfig.js';
import React from 'react';
import { useNavigate } from 'react-router-dom';


export default function Login(props,{user}) {
  const history = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('');
  const onSubmit = async(e)=>{
    e.preventDefault();
    if(email === "" || password === ""){
      alert("Please Enter Email ID and Password")
    }else{
      await signInWithEmailAndPassword(database,email,password).then((userCredential)=>{
        const user = userCredential.user;
        console.log(user);
      }).catch((error)=>{
        //console.log(error.code)

        const err =  error.code.slice(error.code.indexOf('/') + 1).replace(/-/g," ");
        const ret = err.charAt(0).toUpperCase()+ err.slice(1);
        alert(ret);
      })
    }  
  }
  if(user){
    return history('/Response')
  }
  return (
    <section className="container-upper">
  <div className="container">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-lg-12 col-xl-11">
        <div className=" text-black mt-3" id="card">
          <div className=" p-md-1" >
            <div className="row justify-content-center">
              <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                <p className={`text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4 text-${props.mode === 'dark'?'light':'dark'}`}>Login</p>

                <form className="mx-1 mx-md-4"onSubmit={(e)=>{onSubmit(e)}}>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                    <label htmlFor="exampleFormControlInput1 " className={`text-${props.mode === 'dark'?'light':'dark'}`}><strong>UserName</strong></label>
                  <input type="email" className="form-control  my-2" id="exampleFormControlInput1"
                    placeholder="abc@xyz.com"   value={email}   onChange={(e) => setEmail(e.target.value)}/>
                    </div>
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                    <div className="form-group">
                  <label htmlFor="exampleFormControlInput2" className={`text-${props.mode === 'dark'?'light':'dark'}`}><strong>Password</strong></label>
                  <input type="password" className="form-control  my-2" id="exampleFormControlInput2" placeholder="******"  onChange={(e) => setPassword(e.target.value)}/>
                 </div>
                    </div>
                  </div>
                  <div className="d-flex">
                    <button className="btn btn-primary btn-lg mx-3">Login</button>
                  </div>
                  <div className={` text-${props.mode === 'dark'?'light':'dark'} mx-3 my-5`}>Not a Member ? <span><Link to='/Signup'>Create Account</Link></span></div>
            </form>

              </div>
              <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                  className="img-fluid" alt="Sample image" style={{borderRadius:"10%"}}/>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
  );
}
