import React from 'react'
import { Grid } from "@mui/material";
import Button from '../../atoms/Button'
import Typography from '../../atoms/Typography'

interface BuyCryptoProps {
    buyingAmount: string;
  }

function index({buyingAmount}: BuyCryptoProps) {
    const handleClick = () => {};
  return (
    <Grid container>
    <Grid item>
      <Grid container>
        <Grid item>
          <Typography children="You are buying" variant="h3" />
        </Grid>
        <Grid item>
          <Typography children={buyingAmount} variant="h2" />
        </Grid>
        <Grid item>
          <Typography children="1BTC = $3,406,069.54" variant="h3" />
        </Grid>
      </Grid>
    </Grid>

    <Grid item></Grid>
    <Grid item>
      <Button children="Buy Now" variant="contained" onclick={handleClick} />
    </Grid>
  </Grid>
  )
}

export default index