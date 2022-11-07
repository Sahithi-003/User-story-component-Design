import React from 'react'
import Button from '../../atoms/Button'
import Typography from '../../atoms/Typography'

interface IconButtonProps{
    ButtonChildren: string;
    TypoVariant: string;
}

function index(props: IconButtonProps) {
      const handleChange = () => {};
  return (
    <div>
        <Button  variant={'outlined'} children={'Button'} onclick={handleChange}/>
        <Typography variant={'typo'} children={''}/>
    </div>
  )
}

export default index