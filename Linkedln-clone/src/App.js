import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './header';
import Sidebar from './sidebar';
import Feed from './feed';
import Post from './post.js';
import Login from './login';
import {login, logout , selectUser } from './features/userSlice.js';
import {useDispatch, useSelector } from "react-redux";
import { auth } from './firebase';
import CreateAccount from './createaccount.js';
import {BrowserRouter as Router ,useNavigate,Route,Routes } from "react-router-dom";

function App() {
  const logs2 = true;
  const user = useSelector(selectUser)
  const dispatch = useDispatch();
  const [logs ,setlogs] = useState(false);
  
  const setvalue =()=>{
setlogs(true);
  }
  useEffect(()=>{
    auth.onAuthStateChanged(userAuth => {
      if(userAuth)
      {
           dispatch(login({
               email : userAuth.email,
               uid : userAuth.uid,
               displayName : userAuth.displayName,
               photoUrl : userAuth.photoURL,
           }))
      }
      else{
         dispatch(logout);
      }
    })
  },[])
  return (
   
    <div className="App">
       
       {!user ?(<button onClick={setvalue} className="Button"
      style={{
        color: "black",
        backgroundColor: "#5099ff",
        marginTop: 10,
        marginLeft: 200,
        paddingRight: 80,
        paddingLeft: 100,
        borderRadius: 10,
       
      }}
      >New to here click here to create an account</button>):(<div></div>)}{!user ?(logs && <CreateAccount /> || logs2 && <Login />):( 
      <div className='App'>
          <Header />
           <div style={{display:'flex'}}>
       <Sidebar /> 
       <div>
        <Feed />
         <Post />
         </div>  
        </div>
     
           
       </div>
      )
      };
      </div>
      
  );
}

export default App;
