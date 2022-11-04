import React from 'react'
import { Grid } from '@mui/material'
import Typography from '../../atoms/typography'
import ReadTime from '../../molecules/readTime'
import Button from '../../atoms/button'
import Tabs from '../../molecules/tabs'
import Image from '../../atoms/image'

const BookDetail = () => {
  return (
    <div>
      <Grid container direction="row">
        <Grid item>
          <Typography children='Book Name' variant="h2"/>
          <Typography children='Description' variant="h3"/>
          <Typography children="Author Name" variant='h3'/>
          <ReadTime icon="star" label='time'/>
          <Button label='Read Now' variant="contained" />
          <Button label='Buy Book' variant="outlined" />
          <Button label='Send to Kindle' variant="text" />
          <Tabs value={"30"} />
        </Grid>
        <Grid item>
          <Image imgSrc={'book.png'} />
        </Grid>
      </Grid>
    </div>
  )
}

export default BookDetail