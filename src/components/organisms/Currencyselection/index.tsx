import React from 'react'
import { Grid } from "@mui/material";
import Chips from '../../atoms/chips'

function index() {
    
  return (
    <Grid container direction="row">
        <Grid item>
            <Chips label={'Bitcoin'}/>
        </Grid>
        <Grid item>
            <Chips label={'XRP'}/>
        </Grid>
        <Grid item>
            <Chips label={'Polkadot'}/>
        </Grid>
        <Grid item>
            <Chips label={'Etherum'}/>
        </Grid>
        <Grid item>
            <Chips label={'Tether'}/>
        </Grid>
  </Grid>
  )
}

export default index