import React from 'react'
import { Grid } from '@mui/material'
import Icon from '../../atoms/Icon'
import Typography from '../../atoms/Typography'

function PaymentCrypto() {
  return (
    <>
        <Grid item>
            <Icon icon={'BitcoinIcon'} />
        </Grid>
        <Grid item>
            <Typography variant={''} children={'Bitcoin'}/>
        </Grid>
        <Grid item>
            <Typography variant={''} children={'$3,406,069.54'}/>
        </Grid>
        <Grid item>
            <Typography variant={''} children={'Thur Mar 18 , 2021'}/>
        </Grid>
    </>
  )
}

export default PaymentCrypto