import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import logo from "../../assets/logo.png";
import Grid from "@mui/material/Grid2";
import ChatCard from "./ChatCard";

const StartingChat = ({ generateResponse }) => {
  const initialData = [
    {
      heading: "Hi, what is the weather",
      subtext: "Get immediate AI generated response",
    },
    {
      heading: "Hi, what is my location",
      subtext: "Get immediate AI generated response",
    },
    {
      heading: "Hi, what is the temperature",
      subtext: "Get immediate AI generated response",
    },
    {
      heading: "Hi, how are you",
      subtext: "Get immediate AI generated response",
    },
  ];

  return (
    <Stack p={{ xs: 2, md: 3 }} justifyContent={'flex-end'}>
      <Stack alignItems={'center'} spacing={2} my={5}>
        <Typography variant="h2">How Can I Help You Today?</Typography>
        <Box
          component={"img"}
          src={logo}
          height={{ xs: 42, md: 70 }}
          width={{ xs: 42, md: 70 }}
          borderRadius={'50%'}
          boxShadow={4}
        />
      </Stack>
      <Grid container spacing={{xs:1, md:3}}>
        {initialData.map((item) => (
          <Grid item key={item.heading} size={{xs:12, md:6}}>
            <ChatCard heading={item.heading} subtext={item.subtext} handleClick={generateResponse}/>
          </Grid>
        ))}
      </Grid>
    </Stack>
  );
};

export default StartingChat;