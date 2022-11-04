import React from 'react'
import { Grid } from "@mui/material";
import Icon from '../../atoms/Icon'
import Typography from '../../atoms/Typography'

function TotalBalance() {
  return (
    <Grid container>
    <Grid item>
      <Grid container>
        <Grid item>
          <Typography children="Total Balance" variant="h3" />
        </Grid>
        <Grid item>
          <Icon icon={'dollar'}/>
        </Grid>
        <Grid item>
          <Typography children="Bitcoin" variant="h3" />
        </Grid>
        <Grid item>
          <Typography children="0.0234510 BTC" variant="h3" />
        </Grid>
      </Grid>
    </Grid>
  </Grid>
  )
}

export default TotalBalance