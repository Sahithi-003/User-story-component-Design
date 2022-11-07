import React from 'react'
import { Grid } from '@mui/material'
import Typography from '../../atoms/Typography'

function index() {
    
  return (
    <div>
    <Grid container direction="column">
    <Grid item>
      <Typography variant={''} children={'Name'}/>
    </Grid>
    <Grid item>
        <Typography variant={''} children={'Price'}/>
    </Grid>
    <Grid item>
        <Typography variant={''} children={'Change'}/>
    </Grid>
    <Grid item>
        <Typography variant={''} children={'Market Cap'}/>
    </Grid>
    <Grid item>
        <Typography variant={''} children={'Watch'}/>
    </Grid>
  </Grid>
    </div>
  )
}

export default index