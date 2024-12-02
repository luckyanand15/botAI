import { Box, MenuItem, Select, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

const FilteredChat = ({ chat, setFilterChat }) => {
  const [options, setOptions] = useState("All Ratings");
  const handleChange = (e)=>{
    setOptions(e.target.value)
  }
  useEffect(()=>{
    if(options ===  'All Ratings'){
        setFilterChat(chat)
    }
    else{
        const filteredChat = chat.filter(item=>{
            let matched = false;
            item.chat.forEach(chat=>{
                if(chat.rating == options){
                    matched=true;
                }
            })
            return matched;
        })
        setFilterChat(filteredChat)
    }
  },[options])
  return (
    <Box mb={3}>
        <Typography fontSize={12} mb={0.5}>Filter by rating</Typography>
        <Select value={options} onChange={handleChange} size="small" sx={{minWidth: { xs: 1, md: 160 },}}>
            <MenuItem value='All Ratings'>All Ratings</MenuItem>
            <MenuItem value={1}>1 Star</MenuItem>
            <MenuItem value={2}>2 Stars</MenuItem>
            <MenuItem value={3}>3 Stars</MenuItem>
            <MenuItem value={4}>4 Stars</MenuItem>
            <MenuItem value={5}>5 Stars</MenuItem>
        </Select>
    </Box>
  );
};

export default FilteredChat;
