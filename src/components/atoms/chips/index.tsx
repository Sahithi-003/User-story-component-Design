import React from 'react'
import Chip from '@mui/material/Chip';

interface ChipProps {
  label : string;
}

export default function Chips({label}: ChipProps) {
  
  return (
    <div>
        <Chip label={label}/>
    </div>
  )
}
