import React,{ useEffect } from 'react'
import { Grid } from "@mui/material";
import Typography from '../../atoms/Typography'
import DeliveryDropdown from '../../molecules/DropDownDelivery'

function index() {
    let data = [""];

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
      //get data
    }, []);
    
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