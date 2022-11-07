import React from 'react'
import { Grid } from "@mui/material";
import Typography from '../../atoms/Typography'

function MyPortfolio() {
  return (
    <Grid container direction="row">
    <Grid item>
      <Typography children="Total investment" variant="h3" />
      <Typography children="$11,900,204" variant="h2" />
    </Grid>
    <Grid item>
      <Typography children="Bitcoin" variant="h3" />
      <Typography children="$34,000" variant="h2" />
    </Grid>
  </Grid>
  )
}

export default MyPortfolio