import React from 'react';
import SearchBar from './search.js';
import './header.css';
import Headeroption from './headeroption.js';
import { MdPeople , MdHome , MdNotificationsActive ,MdWork,MdLogout} from 'react-icons/md';
import { TbMessageDots } from 'react-icons/tb';
import {logout } from './features/userSlice';
import { useDispatch } from 'react-redux';
import { auth } from './firebase.js';
import { Icon } from '@mui/material';




function Header() {
  const dispatch = useDispatch();
  const Logoutapp = ()=> {
        dispatch(logout())
        auth.signOut();
  }

  return (
    <div className='header2' >

      <div className='header_left'>
      <img src='https://myclouddoor.com/wp-content/uploads/2019/11/Linkedin-logo.png' alt='linkdein' height='90px' />
      <SearchBar />  
      </div>


      <div className='header_right'>
      <Headeroption Icon={MdHome} title="Home"/>
      <Headeroption Icon={MdWork}  title="Job/ Opportunity"/>
      <Headeroption Icon={MdPeople}  title="My Network"/>
      <Headeroption Icon={TbMessageDots}  title="Message"/>
      <Headeroption Icon={MdNotificationsActive}  title="Notification"/>
      <button className='logout' onClick={Logoutapp}><MdLogout/></button>
      </div>
   
      </div>
  )
}

export default Header;