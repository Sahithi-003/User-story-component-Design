import React from 'react'
import { Box, Grid, Modal, TextField } from '@material-ui/core'
import Typography from '../../atoms/typography';
import Button from '../../atoms/button';

function Popup() {
  const [open, setOpen] = React.useState(false);
  const handleClose = () => setOpen(false);
  const handleAddEmail = () => {}
  const handleNeedHelp = () => {}
  return (
    <div>
      <Modal
      open={open}
      onClose={handleClose}
      >
        <Box>
          <Typography children='Set up your Kindle' variant='h1'/>
          <Typography children='Send blinks right to your Kindle from within the app' variant='h1'/>
          <Grid container direction="row">
              <TextField placeholder='email'/>
              <TextField placeholder='@kindle.com'/>
          </Grid>
          <Button label='Add email' onClick={handleAddEmail} variant="contained"/>
          <Button label='Need help?' onClick={handleNeedHelp} variant="outlined"/>
        </Box>
      </Modal>
    </div>
  )
}

export default Popup