import React from 'react'

interface TypographyProps {
    variant : string;
    children : string;
  }

function Typography({variant, children}: TypographyProps) {
    
  return (
    <div>
    <Typography variant={variant}>
      {children}
    </Typography>
    </div>
  )
}

export default Typography