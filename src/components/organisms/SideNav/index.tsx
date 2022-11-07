import React from 'react'
import { Grid } from "@mui/material";
import Icon  from "../../atoms/Icon";

function SideNav() {
  return (
    <Grid container direction="column">
    <Grid item>
      <Icon icon="watchList" />
    </Grid>
    <Grid item>
      <Icon icon="charts" />
    </Grid>
    <Grid item>
      <Icon icon={'Trade'}/>
    </Grid>
    <Grid item>
      <Icon icon="notification" />
    </Grid>
    <Grid item>
      <Icon icon="Logout" />
    </Grid>
  </Grid>
  )
}

export default SideNav