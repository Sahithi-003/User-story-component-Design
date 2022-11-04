import React from 'react'
import {
  Button as MuiButton,
  Typography,
} from "@mui/material";

interface ButtonProps {
  variant: "contained" | "text" | "outlined";
  label: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  styles?: React.CSSProperties | null;
}

const Button = (props: ButtonProps) => {
  const { variant, label, onClick, styles } = props;
  return (
    <div>
      <MuiButton
        variant={variant}
        onClick={onClick}
        sx={styles}
      >
        <Typography >{label}</Typography>
      </MuiButton>
    </div>
  )
}

export default Button