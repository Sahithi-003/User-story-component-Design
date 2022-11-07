import React from 'react'
import { Grid } from "@mui/material";

function index() {
  return (
    <>
      <Grid container direction="row">
        <Grid item>
          <Grid container direction="column">
            <Grid item>Details</Grid>
            <Grid item>Graph</Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  )
}

export default index