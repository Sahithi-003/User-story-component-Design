import React from 'react'
import { Grid, Typography } from '@mui/material'
import Button from '../../atoms/Button'

interface AmountDetailsProps {
    amount : string
}

function index(props: AmountDetailsProps) {
    const {amount} = props
  return (
    <div>
        <Typography children="Amount details"/>
        <Grid container>
            <Grid item>
            <Typography  children={amount}/>
            </Grid>
            <Grid item>
            <Button children="Buy max" variant='outlined' onclick={ () => {} } />
            </Grid>
        </Grid>
    </div>
  )
}

export default index