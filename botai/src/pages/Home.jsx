import React, { useEffect, useRef, useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import { Stack } from "@mui/material";
import { useOutletContext } from "react-router-dom";
import StartingChat from "../components/StartingChat/StartingChat";
import data from "../data/sampleData.json";
import ChattingCard from "../components/ChattingCard/ChattingCard";
import FeedbackModal from "../components/FeedbackModal/FeedbackModal";
import ChatInp from "../components/ChatInp/ChatInp";

const Home = () => {
  const { chat, setChat } = useOutletContext();
  const [chatId, setChatId] = useState(1);
  const [selectedChatId, setSelectedChatId] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [scroll, setScroll] = useState(false)
  const chatRef = useRef(null);

  const generateResponse = (input) => {
    const response = data.find(
      (item) => input.toLowerCase() === item.question.toLowerCase()
    );

    let ans = "Sorry, Did not understand your query!";

    if (response !== undefined) {
      ans = response.response;
    }

    setChat((prev) => ([
      ...prev,
      {
        type: "Human",
        text: input,
        time: new Date(),
        id: chatId,
      },
      {
        type: "AI",
        text: ans,
        time: new Date(),
        id: chatId + 1,
      },
    ]));
    setChatId((prev) => prev + 2);
  };

  useEffect(()=>{
    chatRef.current?.lastElementChild?.scrollIntoView();
  },[scroll])

  return (
    <Stack
      height={"100vh"}
      justifyContent={"space-between"}
      sx={{
        "@media (max-width:767px)": {
          background: "linear-gradient(#F9FAFA 60%, #EDE4FF)",
        },
      }}
    >
      <Navbar />
      {chat.length === 0 && (
        <StartingChat generateResponse={generateResponse} />
      )}

      {chat.length > 0 && (
        <Stack 
        p={{ xs: 2, md: 3 }} 
        spacing={{ xs: 2, md: 3 }} 
        height={1}
        ref={chatRef}
        >
          {chat.map((item, idx) => {
            return (
              <ChattingCard
                key={idx}
                details={item}
                setChat={setChat}
                setSelectedChatId={setSelectedChatId}
                showFeedbackModal={() => setShowModal(true)}
              />
            );
          })}
        </Stack>
      )}
      <FeedbackModal
        open={showModal}
        setChat={setChat}
        selectedChatId={selectedChatId}
        handleClose={() => {
          setShowModal(false);
        }}
      />
      <ChatInp generateResponse={generateResponse} setScroll={setScroll} chat={chat} setChat={()=>setChat([])}/>
    </Stack>
  );
};

export default Home;
