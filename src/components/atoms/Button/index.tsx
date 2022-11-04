import React from 'react'
import {
    Button as MuiButton
  } from "@mui/material";
  
  interface ButtonProps {
    onclick?: ()=> void;
    variant : string;
    children : string;
  }
  
  const Button = (props: ButtonProps) => {
    const { variant, children, onclick } = props;
    return (
      <div>
       <MuiButton variant={variant as any} onClick={onclick}>
        {children}
        </MuiButton>
      </div>
    )
  }
  
  export default Button