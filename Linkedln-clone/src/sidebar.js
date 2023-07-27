import './sideprofile.css'
import React, { useEffect, useState } from "react"
import {db,auth} from './firebase.js';
import {useDispatch, useSelector} from "react-redux";
const img ='https://tse2.mm.bing.net/th/id/OIP.DUPEbNRjyRjkJxdxErgV1AHaD4?pid=ImgDet&rs=1'
const back = 'https://tse2.mm.bing.net/th/id/OIP.Mm8ye2MJIT30l-OZFCGyCQHaEK?w=295&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7'

export default function Sidebar() {
 
  const [email, setEmail ] = useState('omkar@gmail.com');
  const [photo, setPhoto ] = useState(img);
  const [username ,setName ] = useState('user name');

  const setvalue = function(Email , PhotoURL ,name){
    setEmail(Email)
    setName(name)
    setPhoto(PhotoURL)

  }
  useEffect(()=>{
    auth.onAuthStateChanged(userAuth => {
      if(userAuth)
      {
        setvalue(userAuth.email,userAuth.photoURL,userAuth.displayName);
      }
      else
      {
         console.log("not logged");
      }
    })
  },[])

  return (
    <div className="side_profile"  >
        <img
          src={back} 
          alt="Girl in a jacket" style={{width:"220px" , height:"100px"}}/> 
         <img
          src={photo}
          alt="Avatar"
          className="circle"
        />
        <span className="text" style= {{ top: 10 , left: "-5%"}} >{username}</span>
        <div className="text" style= {{ top: 1, left: "10%", fontWeight: 100 }}>
          {email}
        </div>
        <div>
        <hr style= {{ marginTop: 20 }}/>
        <span className="text" style= {{ fontSize: "small" }}>
          Who viewed your profile &nbsp; &nbsp; 0
          <br />
        </span>
        <span className="text" style={{ fontSize: "small" }}>
          Who viewed your profile &nbsp; &nbsp; 0
        </span>
      </div>
      </div>
  );
}
