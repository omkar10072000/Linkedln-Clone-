import { Password } from '@mui/icons-material'
import './login.css'
// import { auth} from './firebase.js';
import{db , auth , createUserWithEmailAndPassword} from './firebase.js';
import {updateProfile ,signInWithEmailAndPassword} from "firebase/auth";
import { useDispatch } from 'react-redux';
import React, {useState} from 'react';
import { async } from 'safe/lib/safe';
import Login from './login.js';
const logs = false;




export default function CreateAccount() {
  const [logs ,setlogs] = useState(false);
  const [email, setEmail ] = useState("");
  const [password , setPassword] = useState("");
  const [photo , setPhoto] =useState("");
  const [name, setName] = useState("");
  const [profilePic,setProfilePic] = useState("");
  const dispatch = useDispatch();

  const loginToApp = (e) => {
    e.preventDefault();
  }

  const changelogs = () => {
    setlogs(true);
    console.log('\n\n\n\nvariable:', logs);
  } 

  const register = async() => {
    if(!email)
    {
      return alert('Please enter your full name')
    }
    createUserWithEmailAndPassword(auth ,email,password).then((userauth) => {
      updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: profilePic,
        })
        


      }).then(() => {
        // Profile updated!
        const curr = auth.currentUser;
        dispatch(Login({
          email : curr.email,
          uid : curr.uid,
        })
        );
        // ...
      }).catch((error) => {
        // An error occurred
        // ...
        console.log('\n\n\nvariable============',);

        


      });
    
  }






    //   userAuth.updateProfile({
    //     displayName : email,
    //     photoURL : profilePic ,
    //   }).then(() => {
    //     dispatch(Login({
    //       email : userAuth.user.email,
    //       uid : userAuth.user.uid,
    //       displayName : name,
    //       photoURL : profilePic,
    //     })
    //     );
    //   });
    // }).catch()
    //   console.log('\n\n\nvariable============',);
    // };

  return (
    <div style={{  padding: "50px 50px 200px 50px" }}>
    <div >
     <nav>
     <span className="PraRoz" style={{ paddingLeft: 2 }}>
        Linkedin
        </span>
        <a className="normal_size">HOME</a><a className="normal_size">ABOUT</a>
        <a className="normal_size">SERVICE</a><a className="normal_size">DESIGN</a>
        <a className="normal_size">CONTACT</a>
        <div style={{ float: "right" }}>
        <form>
        <input type="text" placeholder="Type To Text" className="input_style" />
        <button type="button" className="button_style">
          Search
        </button>
      </form>
    </div>
  </nav>
  <div style={{ float: "left" }}>
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <span style={{ color: "aqua", fontSize: 40, fontWeight: "bolder" }}>
    Welcome to
    </span>
    <br/>
    <span style={{ color: "aqua", fontSize: 40, fontWeight: "bolder" }}>
    your professional community
    </span>
    <br />
    <span style={{ color: "aliceblue", fontSize: 40, fontWeight: "bolder" }}>
     Platform
    </span>
    <br />
    <span style={{ color: "white" }}>
    With the Open To Work feature,
    <br /> 
    you can privately tell recruiters or publicly share with the LinkedIn community 
    <br />
    that you are looking for new job opportunities.
      <br />
      <br />
      <br />
      <button
        className="Button"
        style={{ backgroundColor: "#5099ff", color: "black" }}
        onClick={changelogs}
      >
        Join us
      </button>
    </span>
  </div>
  <div className="Login_box">
    <form action="">
      <button className="Button">Create Account</button>
      <br />
      <br />
      <br />
      <input type="text"  value={email} onChange={e => setEmail(e.target.value)} placeholder="Enter Email Here" className="input_box" />
      <br />
      <br />
      <input type="text"  value={profilePic} onChange={e => setProfilePic(e.target.value)} placeholder="Enter ProfilePic Link" className="input_box" />
      <br />
     
      <br />
      <input type="text"  value={name} onChange={e => setName(e.target.value)} placeholder="Enter Name" className="input_box" />
      <br />
     
      <br />
      <br />
      <input
        type="text"
        value={password} onChange={e => setPassword(e.target.value)}
        placeholder="Enter Password Here"
        className="input_box"
      />
    </form>
    <button
    onClick={register}
      className="Button"
      style={{
        color: "black",
        backgroundColor: "#5099ff",
        marginTop: 20,
        paddingRight: 80,
        paddingLeft: 100,
        borderRadius: 10
      }}
    >
      Login
    </button>
    </div>
</div>

    </div>
  )
}




