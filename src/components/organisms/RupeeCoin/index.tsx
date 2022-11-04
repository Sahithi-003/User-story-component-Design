import React from 'react'
import { Grid } from "@mui/material";
import Icon from '../../atoms/Icon'
import Typography from '../../atoms/Typography'

function index() {
  return (
    <Grid container>
    <Grid item>
      <Grid container>
        <Grid item>
          <Typography children="Deposit to" variant="h3" />
        </Grid>
        <Grid item>
          <Icon icon={'dollar'}/>
        </Grid>
        <Grid item>
          <Typography children="USD Coin (Cash Wallet)" variant="h3" />
        </Grid>
        <Grid item>
          <Typography children="Default" variant="h3" />
        </Grid>
      </Grid>
    </Grid>
  </Grid>
  )
}

export default index