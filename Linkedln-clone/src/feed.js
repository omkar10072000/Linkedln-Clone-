import firebase from 'firebase/compat/app';
import React, { useEffect, useState } from "react";
import './Feed.css';
import './header.css';
import { MdThumbUpAlt , MdCreate ,MdOutlineSend,MdShare,MdOutlineMessage, MdOutlineBookmarkAdd} from 'react-icons/md';
import {db,auth} from './firebase.js';
import Post from './post.js';
import img from  './images/my_photo.jpg';
import { collection, getDocs,addDoc,orderBy,query,serverTimestamp } from "firebase/firestore"; 




export default function Feed(){
    const [input, setInput ] = useState('');
    const [posts, setPosts ] = useState([]);
    const [profileURL,setprofileURL] =useState('');
    const [Displayname ,setDisplayname] =useState();
    const [emails ,setEmail] = useState('raje@gmail.com');
 
    const asyncfn = async () => {
        console.log('executing function ------------------------- \n\n\n\n');
    try{
        const querySnapshot = await getDocs( query (collection(db, 'Posts'), orderBy("timestamp", "desc")));
            setPosts(
                querySnapshot.docs.map((doc) => (
                   
                    {
                   id : doc.id,
                    data: doc.data()
                    }
                
                
                ) ))
                
                
         
    }
    catch(error){console.log("Error getting documents: ", error);}
    }

    const setvalue = function(URL,names,email){
        setprofileURL(URL)
        setDisplayname(names)
        setEmail(email)
    }

    useEffect(() => {
       asyncfn()   
       auth.onAuthStateChanged( userAuth => {
        if(userAuth)
        {
          setvalue(userAuth.photoURL,userAuth.displayName,userAuth.email);
        }
        else
        {
           console.log("not logged");
        }
      })    
        },[])

    const sendPost = async(e) => {
         e.preventDefault();
        try {
            const docRef = await addDoc(collection(db, "Posts"), {
                name :Displayname , description :  emails, message : input, photoUrl : profileURL,timestamp : serverTimestamp()
            });
          
            console.log("Document written with ID: ", docRef.id);
          } catch (e) {
            console.error("Error adding document: ", e);
          }

    //     db.collection('Posts').add({ name :'Omka Raje' , description : 'success' , message : input, photoUrl : '',timestamp : firebase.firestore.FieldValue.serverTimestamp()
        
    // })

    setInput('');
    asyncfn()
    }


    return (
            <div>
          <div className="feed_input">
                
                <form className="input2">
                    {MdCreate && <MdCreate className='headerOption__icon' style={{color:'blue'}}/>}
                    <input value={input} onChange={e => setInput(e.target.value)} type='text' ></input>
                    <button  onClick={sendPost} type='submit'>send</button>
                </form>
                <div style={{display:'flex'}}>
                     <div className='headeroption2'  > 
                     {MdThumbUpAlt && <MdThumbUpAlt className='headerOption__icon' style={{color:'blue'}}></MdThumbUpAlt>}
                     <div className='headerOption__title'>&nbsp;&nbsp;Like</div>
                     </div>
                     <div className='headeroption2'  >
                     {MdOutlineMessage && <MdOutlineMessage className='headerOption__icon' style={{color:'blue'}}></MdOutlineMessage>}
                     <div className='headerOption__title'>Message</div>
                     </div>
                     <div className='headeroption2'  >
                     {MdShare && <MdShare className='headerOption__icon' style={{color:'blue'}}></MdShare>}
                     <div className='headerOption__title'>Share</div>
                     </div>
                     <div className='headeroption2' >
                     {MdOutlineSend && <MdOutlineSend className='headerOption__icon' style={{color:'blue'}}></MdOutlineSend>}
                     <div className='headerOption__title'>Send</div>
                     </div>
                </div>
                </div>
              
                {posts.map(({id,data : {name,description,message,photoUrl}})=>(
                 
                 console.log('variable:++++++++++++++++++++++++++++++++++++'+name,'-----'+description,'}}}}}}}}}}}}}}}}}'+message),
                <Post 
                key={id}
                name={name}
                message={message}
                description={description}
                photo={photoUrl}
                />))}
                
               
        </div>
          
    
    );
}