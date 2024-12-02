import { Box, Stack, Typography, Divider } from "@mui/material";
import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import FilteredChat from "../components/FilteredChat/FilteredChat";
import HistoryCard from "../components/HistoryCard/HistoryCard";

const History = () => {
  const [chat, setChat] = useState([]);
  const [filterChat, setFilterChat] = useState([]);

  useEffect(() => {
    const localChats = localStorage.getItem("chat") || [];
    if (localChats.length > 0) {
      setChat(JSON.parse(localChats));
      setFilterChat(JSON.parse(localChats));
    }
  }, []);

  return (
    <Box
      height={"100vh"}
      overflow={"hidden"}
      sx={{
        overflowY: "auto",
        "&::-webkit-scrollbar": {
          width: "10px",
        },
        "&::-webkit-scrollbar-track": {
          boxShadow: "inset 0 0 8px rgba(0,0,0,0.1)",
          borderRadius: "8px",
        },
        "&::-webkit-scrollbar-thumb": {
          backgroundColor: "rgba(151, 133, 186,0.4)",
          borderRadius: "8px",
        },
      }}
    >
      <Navbar />
      <Box p={{ xs: 2, md: 3 }}>
        <Typography variant="h2" textAlign={"center"} mb={3}>
          Converstaion History
        </Typography>
        {chat.length > 0 && (
          <FilteredChat chat={chat} setFilterChat={setFilterChat} />
        )}
        {chat.length === 0 && (
          <Typography
            textAlign={"center"}
            p={3}
            bgcolor={"primary.light"}
            borderRadius={2}
          >
            No saved chats.
          </Typography>
        )}
        {chat.length > 0 && filterChat.length == 0 && (
          <Typography
            textAlign={"center"}
            p={3}
            bgcolor={"primary.light"}
            borderRadius={2}
          >
            No such chats.
          </Typography>
        )}
        {filterChat.length > 0 && (
          <Stack
            spacing={4}
            divider={
              <Divider sx={{ borderColor: "primary.bg", opacity: 0.4 }} />
            }
          >
            {filterChat.map((item, idx) => (
              <HistoryCard item={item} key={idx} />
            ))}
          </Stack>
        )}
      </Box>
    </Box>
  );
};

export default History;
