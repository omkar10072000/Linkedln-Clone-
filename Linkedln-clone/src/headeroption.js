import React from 'react';
import './header.css';

function Headeroption({Icon , title}) {
  return (
    <div className='headeroption'>
       {Icon && <Icon className='headerOption__icon'></Icon>}
      <div className='headerOption__title'>{title}</div>
    </div>
  )
}


export default Headeroption;
