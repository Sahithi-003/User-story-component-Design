import React from 'react'

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