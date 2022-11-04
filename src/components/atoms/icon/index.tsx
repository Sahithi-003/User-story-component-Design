import React from 'react'
import MuiIcon from '@mui/material/Icon';

interface IconProps{
  icon: string;
}

const Icon = (props: IconProps) => {
  const { icon } = props;

  return (
    <div>
      <MuiIcon>{icon}</MuiIcon>;
    </div>
  )
}

export default Icon