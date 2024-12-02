import { Box, Button, Snackbar, Stack, TextField } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const ChatInp = ({ generateResponse, setScroll, chat, setChat }) => {
  const [input, setInput] = useState("");
  const [showSnackbar, setShowSnackbar] = useState(false);
  const inputRef = useRef(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    generateResponse(input);
    setInput("");
    setScroll((prev) => !prev);
  };

  const handleSave = () => {
    const chatHist = JSON.parse(localStorage.getItem('chat')) || [];
    const date = new Date();
    localStorage.setItem(
      "chat",
      JSON.stringify([{ chat: chat, date: date }, ...chatHist])
    );
    setChat();
    setShowSnackbar(true);
  };

  useEffect(() => {
    inputRef.current.focus();
  }, []);
  return (
    <Box px={{ xs: 0.5, md: 3 }} pb={{ xs: 1, md: 3 }}>
      <Box component={"form"} onSubmit={handleSubmit}>
        <Stack direction={"row"} spacing={{ xs: 0.5, md: 2 }}>
          <TextField
            placeholder="Message Bot AI..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            required
            inputRef={inputRef}
            sx={{
              flex: 1,
              bgcolor: "primary.light",
              borderRadius: 1,
              "& input": {
                fontSize: { xs: 12, md: 16 },
                paddingLeft: { xs: 1, md: 2 },
                paddingRight: { xs: 1, md: 2 },
              },
            }}
          />
          <Button
            variant="contained"
            type="submit"
            sx={{
              fontSize: { xs: 12, md: 16 },
              fontFamily: "Ubuntu, serif",
              textTransform: "none",
              "@media (max-width:767px)": {
                minWidth: 0,
                paddingLeft: 1.5,
                paddingRight: 1.5,
              },
            }}
            disableElevation
            size="large"
          >
            Ask
          </Button>
          <Button
            variant="outlined"
            sx={{
              color: "#000",
              border: 1,
              fontSize: { xs: 12, md: 16 },
              fontFamily: "Ubuntu, serif",
              textTransform: "none",
              "@media (max-width:767px)": {
                minWidth: 0,
                paddingLeft: 1.5,
                paddingRight: 1.5,
              },
              "&:hover": {
                background: "#AF9FCD",
              },
            }}
            disableElevation
            size="large"
            disabled={!chat.length > 0}
            onClick={handleSave}
          >
            Save
          </Button>
        </Stack>
      </Box>
      <Snackbar
        open={showSnackbar}
        message={"Chat Saved."}
        onClose={() => setShowSnackbar(false)}
        autoHideDuration={3000}
        action={
          <Link to="/history">
            <Button size="small">See past conversations</Button>
          </Link>
        }
      />
    </Box>
  );
};

export default ChatInp;
