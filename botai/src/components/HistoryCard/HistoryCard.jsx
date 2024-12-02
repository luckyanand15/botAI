import { Box, Stack, Typography } from '@mui/material'
import { add, format, isEqual, startOfDay } from 'date-fns'
import React from 'react'
import ChattingCard from '../ChattingCard/ChattingCard';

const HistoryCard = ({item}) => {
    const formatDate = (date)=>{
        const today = startOfDay(new Date())
        if(isEqual(date, today)){
            return "Today's chats"
        }
        else if(isEqual(today, add(date, {days:1}))){
            return "Yesterday's chats"
        }
        else{
            return format(date, 'do LLL yyyy')
        }
    }
  return (
    <Box>
        <Typography fontWeight={700} mb={2}>
            {formatDate(startOfDay(new Date(item.date)))}
        </Typography>
        <Stack spacing={{xs:2, md:3}}>
            {item.chat.map((item,idx)=>(
                <ChattingCard details={item} readOnly={true} key={idx}/>
            ))}
        </Stack>
    </Box>
  )
}

export default HistoryCard