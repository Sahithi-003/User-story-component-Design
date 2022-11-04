import React from 'react'
import { Grid } from "@mui/material";
import PaymentCrypto from '../../molecules/PaymentCrypto'

function WatchlistBar() {
  return (
    <Grid container direction="row">
    <Grid item>
      <PaymentCrypto/>
    </Grid>
    <Grid item>
    <PaymentCrypto/>
    </Grid>
  </Grid>
  )
}

export default WatchlistBar