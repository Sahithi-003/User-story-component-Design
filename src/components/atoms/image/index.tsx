import React from "react";
import { Box, SxProps, Theme } from "@mui/material";

export interface ImageProps {
    imgSrc: string;
    sx?: SxProps<Theme>;
  }
  const Image = (props: ImageProps) => {
    const {sx,imgSrc} = props;
    return (
      <Box
        src={imgSrc}
        component="img"
        sx={sx}
        data-testid="image"
        alt="image"
      />
    );
  };
  
  export default Image;