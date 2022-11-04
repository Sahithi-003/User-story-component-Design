import React from 'react'
import { Grid } from '@mui/material';
import Typography from '../../atoms/typography';

interface ReadTimeProps {
  label : string;
  icon : React.ReactNode
}

function ReadTime(props: ReadTimeProps) {
  const { icon, label } = props;
  return (
    <div>
      <Grid container direction='row'>
        <Grid item>
          {icon}
        </Grid>
        <Grid item>
        <Typography children={label} variant='h3'/>
        </Grid>
      </Grid>
    </div>
  )
}

export default ReadTime