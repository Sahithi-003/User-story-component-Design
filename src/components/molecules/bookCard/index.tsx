import React from 'react'
import { Card, CardContent, CardMedia } from '@material-ui/core'
import Typography from '../../atoms/typography';
import Icon from '../../atoms/icon';
import ProgressBar from '../../atoms/progressBar'
import ReadTime from '../readTime';
interface BookCardProps {
  image: string;
  bookTitle: string;
  authorName: string;
}

const BookCard = (props: BookCardProps) => {
  const { image, bookTitle, authorName } = props;

  return (
    <Card>
      <CardMedia
          component="img"
          image={image}
          alt="book name"
      />
      <CardContent>
        <Typography  variant="h5" children={bookTitle}/>
        <Typography variant="body2" children={authorName}/>
        <ReadTime icon={<Icon icon="star"/>} label = "15 min"/>
        <ProgressBar value={40}/>
      </CardContent>

    </Card>
  )
}

export default BookCard