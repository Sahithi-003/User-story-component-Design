import React from 'react'
import { Grid } from "@mui/material";
import PaymentCard from '../../molecules/PaymentCards'

function index() {
  return (
    <Grid container direction="column">
        <Grid item>
            <PaymentCard/>
        </Grid>
        <Grid item>
            <PaymentCard/>
        </Grid>
    </Grid>
  )
}

export default index