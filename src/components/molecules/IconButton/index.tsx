import React from 'react'
import Button from '../../atoms/Button'
import Typography from '../../atoms/Typography'

interface IconButtonProps{
    ButtonChildren: string;
    TypoVariant: string;
}

function index(props: IconButtonProps) {
  return (
    <div>
        <Button  variant={'outlined'} children={'Button'}/>
        <Typography variant={'typo'} children={''}/>
    </div>
  )
}

export default index