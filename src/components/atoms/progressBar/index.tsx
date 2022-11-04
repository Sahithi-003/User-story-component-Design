import React from 'react'
import LinearProgress from '@mui/material/LinearProgress';
import { styled } from '@mui/material/styles';

interface ProgressBarProps{
  value: number;
}
const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
}));

const ProgressBar = (props: ProgressBarProps) => {
  const { value } = props;

  return (
    <div>
      <BorderLinearProgress variant="determinate" value={value} />
    </div>
  )
}

export default ProgressBar