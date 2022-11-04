import React from 'react'
import { Grid } from "@mui/material";
import Button from "../../atoms/Button";
import Typography from "../../atoms/Typography";

function Footer() {
  return (
    <div>
        <Grid container direction="row">
        <Grid item>
          <Typography children="Dashboard" variant="h3" />
        </Grid>
        <Grid item>
          <Typography children="Careers" variant="h3" />
        </Grid>
        <Grid item>
          <Typography children="Legal & Privacy" variant="h3" />
        </Grid>
        <Grid item>
          <Typography children="2021 Minet" variant="h3" />
        </Grid>
        <Grid item>
          <Button children="Need Help" variant="outlined" onclick={() => {}} />
        </Grid>
      </Grid>
    </div>
  )
}

export default Footer