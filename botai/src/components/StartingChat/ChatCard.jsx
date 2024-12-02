import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import { Box, IconButton, Stack, Typography } from "@mui/material";
import React from "react";

const ChatCard = ({ heading, subtext, handleClick }) => {
  return (
    <Stack
      direction={"row"}
      bgcolor={"primary.light"}
      p={{ xs: 1.2, md: 3 }}
      borderRadius={1}
      boxShadow={"0 0 12px rgba(0,0,0,0.1)"}
      justifyContent={'space-between'}
      alignItems={'center'}
      sx={{
        '&:hover .MuiIconButton-root':{
          opacity:1
        },
        cursor:'pointer',
        transition: 'background 200ms ease'
      }}
      onClick={()=>handleClick(heading)}
    >
      <Box>
        <Typography
          variant="heading"
          fontSize={{ xs: 14, md: 20 }}
          fontWeight={700}
        >
          {heading}
        </Typography>
        <Typography color={"primary.text"} fontSize={{ xs: 10, md: 16 }}>
          {subtext}
        </Typography>
      </Box>
      <IconButton size="small" sx={{opacity:0, transition:'opacity 400ms ease'}}>
        <ArrowUpwardIcon fontSize="inherit"/>
      </IconButton>
    </Stack>
  );
};

export default ChatCard;
