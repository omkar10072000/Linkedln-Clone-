import React from 'react';
import './post.css';

import {MdThumbUpAlt,MdOutlineMessage,MdShare,MdOutlineSend} from 'react-icons/md';

function post ({name,message,description,photo}){
  return (
    <div>
    <div className='post'>
      <div style={{display:'flex' }}>
      <img src={photo}
          alt="Avatar"  className="circle2" />
        
        <p style={{margin:'10px'}}>{name} <br></br>{description}</p>
        </div>
        <div style={{margin:'10px'}}>{message}</div>
        <div style={{display:'flex'}}>
        
        <div className='buttons'> {MdThumbUpAlt && <MdThumbUpAlt ></MdThumbUpAlt>}
        <span style={{margin:'5px'}}>Like</span></div>
        <div className='buttons'> {MdOutlineMessage && <MdOutlineMessage ></MdOutlineMessage>}
        <span style={{margin:'5px'}}> Comment</span></div>
        <div className='buttons'> {MdShare && <MdShare ></MdShare>}
        <span style={{margin:'5px'}}>Share</span></div>
        <div className='buttons'> {MdOutlineSend && <MdOutlineSend ></MdOutlineSend>}
        <span style={{margin:'5px'}}>Send</span></div>
        
        </div>
    </div>
    
  </div>
  )
}

export default post;
