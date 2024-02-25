import { onAuthStateChanged} from 'firebase/auth';
import { database } from './components/FirebaseConfig';
import Navbar from './components/Navbar';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Response from './pages/Response'
import { useEffect, useState, } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import ProtectedRoute from './components/ProtectedRoute';
function App() {
  const [user,setUser] = useState('');
  const [mode,setmode] = useState('light')
  function toogleMode(){
    if(mode === 'light'){
      setmode('dark');
      document.body.style.backgroundColor='black';
    }else{
      setmode('light');
      document.body.style.backgroundColor='white';
    }
  };
  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(database,(user)=>{
        if(user){
          setUser(user);
          return;
        }else{
          setUser(null);
        }
    })
    return ()=> unsubscribe();
  })

  return (
    <>
    <Router>
     <Navbar title={"Portal"} mode={mode} toogleMode={toogleMode} />
      <Routes>
      <Route path="/Signup" element={<Signup mode ={mode}/>} />
      <Route path="/" element={<Login  mode ={mode} user={user}/>} />
      <Route path="/Response" element={<ProtectedRoute user={user}><Response></Response></ProtectedRoute>}/>  
      </Routes>
      </Router>
    </>
  );
}
export default App;
