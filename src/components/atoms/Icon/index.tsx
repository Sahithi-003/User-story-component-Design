import React from 'react'
import MuiIcon from '@mui/material/Icon';

interface IconProps{
    icon: string;
  }
  
  const Icon = (props: IconProps) => {
    const { icon } = props; 
    return (
      <div>
       <img src={icon} alt="icon" />;
      </div>
    )
  }
  
  export default Icon