
import React,{useState} from 'react';
import { database } from '../components/FirebaseConfig.js';
import{createUserWithEmailAndPassword} from 'firebase/auth'
import { useNavigate } from 'react-router-dom';
export default function Signup(props) {
  const history = useNavigate();
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('');
  const onSubmit = async(e)=>{
    e.preventDefault();
    if(email === "" || password === ""){
      alert("Please Enter Email ID and Password")
    }else{
      await createUserWithEmailAndPassword(database,email,password).then((userCredential)=>{
        const user = userCredential.user;
        console.log(user);
        history('/')
      }).catch((error)=>{
        //console.log(error.code)

        const err =  error.code.slice(error.code.indexOf('/') + 1).replace(/-/g," ");
        const ret = err.charAt(0).toUpperCase()+ err.slice(1);
        alert(ret);
      })
    }  
  }

  return (
    <>
 <section className="main p-5">
  <div className="container  h-100">
    <div className="row justify-content-center align-items-center h-100 ">
      <div className="col-12 col-lg-9 col-xl-7">
            <h3 className={`mb-4 pb-2 pb-md-0 mb-md-5 text-${props.mode === 'dark'?'light':'dark'}`}>Registration Form</h3>
            <form>

              <div className="row">
                <div className="col-md-8 mb-4">
                  <div className="form-outline">
                  <label htmlFor="exampleFormControlInput1 " className={`text-${props.mode === 'dark'?'light':'dark'}`} ><strong>UserName</strong></label>
                  <input type="email" className="form-control  my-2" id="exampleFormControlInput1"
                    placeholder="abc@xyz.com" value={email}   onChange={(e) => setEmail(e.target.value)} />
                  </div>

                </div>
              </div>

              <div className="row">
                <div className="col-md-8 mb-4 pb-2">
                <label htmlFor="exampleFormControlInput2" className={`text-${props.mode === 'dark'?'light':'dark'}`}><strong>Password</strong></label>
                  <input type="password" className="form-control  my-2" id="exampleFormControlInput2" placeholder="******" value={password}
                                onChange={(e) => setPassword(e.target.value)} />
                  </div>
              </div>
              <div className="mt-1 pt-1">
                <button className="btn btn-primary" onClick={onSubmit}>Submit</button>
              </div>

            </form>
          </div>
        </div>
      </div>
</section>
    </>
  )
}
