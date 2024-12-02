import { Box, Button, Stack, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";
import logo from "../../assets/newChatLogo.png";
import AddCommentIcon from '@mui/icons-material/AddComment';

const Sidebar = ({ setChat, setMenu }) => {
  const mobileSize = useMediaQuery("(max-width:768px)");
  return (
    <Box>
      {mobileSize && (
        <Button
          endIcon={<CloseIcon />}
          sx={{
            width: 1,
            justifyContent: "flex-end",
            color: "#AF9FCD",
          }}
          onClick={setMenu}
        >
          Close
        </Button>
      )}

      <Link to={"/"} style={{ textDecoration: "none" }}>
        <Stack
          direction={"row"}
          spacing={1}
          alignItems={"center"}
          justifyContent={"space-between"}
          py={2}
          px={{ xs: 2, md: 3 }}
          onClick={() => {
            setChat([]);
            setMenu();
          }}
          sx={{
            bgcolor: "primary.main",
            "&:hover ": {
              bgcolor: "primary.bg",
            },
          }}
        >
          <Stack direction={'row'} gap={1} alignItems={'center'}>
            <Box
            component={'img'}
            src={logo}
            height={42}
            width={42}
            borderRadius={2}
            boxShadow={4}
            />
            <Typography
            variant={'heading'}
            fontSize={{xs:16, md:20}}
            color={'#000'}
            >
                New Chat
            </Typography>
          </Stack>
          <AddCommentIcon sx={{ color: '#000' }} />
        </Stack>
      </Link>
      <Box p={{xs:2, md:3}}>
        <Link to={'/history'}>
        <Button
        variant="contained"
        disableElevation
        size="large"
        sx={{ fontFamily: "Ubuntu, serif", textTransform: "none", width:1 }}
        >
            Past Conversations
        </Button>
        </Link>
      </Box>

    </Box>
  );
};

export default Sidebar;
