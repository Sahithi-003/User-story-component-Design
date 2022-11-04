import React from 'react'
import { Grid } from "@mui/material";
import Typography from '../../atoms/Typography'
import DeliveryDropdown from '../../molecules/DropDownDelivery'

function index() {
  return (
    <Grid container direction="row">
        <Grid item>
            <Typography variant={''} children={'Select speed delivery'}/>
        </Grid>
        <Grid item>
            <DeliveryDropdown deliveryOptions={[]}/>
        </Grid>
    </Grid>
  )
}

export default index