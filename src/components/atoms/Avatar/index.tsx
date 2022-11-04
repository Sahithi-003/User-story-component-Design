import React from 'react'

interface AvatarProps{
    src: string;
  }
  
  const Avatar = (props:AvatarProps) => {
    const { src } = props;
  
    return (
      <div>
        <Avatar  src={src} />
      </div>
    )
  }
  
  export default Avatar