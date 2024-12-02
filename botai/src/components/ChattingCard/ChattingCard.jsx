import { Box, IconButton, Rating, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import ai from "../../assets/logo.png";
import human from "../../assets/human.png";
import { format } from "date-fns";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";

const ChattingCard = ({
  details,
  setChat,
  setSelectedChatId,
  showFeedbackModal,
  readOnly = false,
}) => {
  const [isRating, setIsRating] = useState(false);
  const [rating, setRating] = useState(0);
  useEffect(() => {
    if (isRating) {
      setChat((prev) =>
        prev.map((item) => {
          if (item.id === details.id) {
            return { ...item, rating: rating || 0 };
          } else {
            return { ...item };
          }
        })
      );
    }
  }, [rating]);

  return (
    <Stack
      direction={"row"}
      spacing={{ xs: 1, md: 3 }}
      p={{ xs: 1, md: 2 }}
      borderRadius={1}
      bgcolor={readOnly ? "primary.main" : "primary.light"}
      boxShadow={"0 0 4px rgba(0,0,0,0.1)"}
      sx={{
        "&:hover .feedbackButton": {
          visibility: "visible",
          opacity: 1,
        },
      }}
    >
      <Box
        component={"img"}
        src={details.type === "AI" ? ai : human}
        height={{ xs: 30, md: 68 }}
        width={{ xs: 30, md: 68 }}
        borderRadius={"50%"}
      />
      <Box>
        <Typography
          variant="heading"
          fontWeight={700}
          fontSize={{ xs: 14, md: 16 }}
        >
          {details.type === "AI" ? "Soul AI" : "You"}
        </Typography>
        <Typography fontSize={{ xs: 12, md: 16 }}>{details.text}</Typography>
        <Stack direction={"row"} gap={2} alignItems={"center"} mt={1}>
          <Typography fontSize={{ xs: 8, md: 12 }} color={"primary.text"}>
            {format(details.time, "hh:mm:a")}
          </Typography>
          {details.type === "AI" && !readOnly && (
            <Stack
              className="feedbackButton"
              direction={"row"}
              visibility={{ xs: "visible", md: "hidden" }}
              sx={{
                opacity: { xs: 1, md: 0 },
                transition: "opacity 400ms ease",
              }}
            >
              <IconButton
                size="small"
                onClick={() => setIsRating((prev) => !prev)}
              >
                {!isRating && <ThumbUpOffAltIcon fontSize="inherit" />}
                {isRating && <ThumbUpAltIcon fontSize="inherit" />}
              </IconButton>
              <IconButton
                size="small"
                onClick={() => {
                  setSelectedChatId(details.id);
                  showFeedbackModal();
                }}
              >
                <ThumbDownOffAltIcon fontSize="inherit" />
              </IconButton>
            </Stack>
          )}
        </Stack>
        {(isRating || details.rating > 0) && details.type == "AI" && (
          <Box pt={{ xs: 1, md: 2 }}>
            <Typography
              component={"legend"}
              fontSize={{ xs: 10, md: 12 }}
              mb={0.5}
            >
              {readOnly ? "Rating" : "Rate this response"}
            </Typography>
            <Rating
              name="simple-controlled"
              value={details.rating > 0 ? details.rating : rating}
              onChange={(e, val) => {
                setRating(val);
              }}
              sx={{ width: "auto" }}
              readOnly={readOnly}
            />
          </Box>
        )}
        {details.feedback && (
          <Typography pt={1} fontSize={{ xs: 10, md: 16 }}>
            <Box component={"span"} fontWeight={600}>
              Feedback:
            </Box>
            <Box component={"span"}>{`${details.feedback}`}</Box>
          </Typography>
        )}
      </Box>
    </Stack>
  );
};

export default ChattingCard;
