import React from 'react'
import { Grid } from '@mui/material'
import Icon from '../../atoms/Icon'
import Typography from '../../atoms/Typography'

function PaymentCard() {
    
  return (
    <Grid container direction="column">
        <Grid item>
            <Icon icon={'radio'} />
        </Grid>
        <Grid item>
            <Typography variant={''} children={'Endid in....8845'}/>
        </Grid>
        <Grid item>
            <Typography variant={''} children={'LastTime used'}/>
        </Grid>
        <Grid item>
            <Typography variant={''} children={'Thur Mar 18 , 2021'}/>
        </Grid>
    </Grid>
  )
}

export default PaymentCard