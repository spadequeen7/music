import React from "react";
import ReactPlayer from "react-player";
import { Container, Card, Box, CardMedia, IconButton } from "@mui/material";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import SkipNextIcon from "@mui/icons-material/SkipNext";

const Player = (props) => {
  const playList = [
    {
      name: "Red",
      artist: "Taylor Swift",
      url: `https://firebasestorage.googleapis.com/v0/b/music-6fc30.appspot.com/o/02%20Red%20(Taylor's%20Version).mp3?alt=media&token=2b343a47-1f3d-4d23-9582-6a73d738f9fb`,
    },
  ];

  const [isPlaying, setIsPlaying] = React.useState(false);

  const currentPlay = playList[0];

  const handlePlay = () => {
    console.log("Play");
    setIsPlaying((prevState) => !prevState);
  };

  return (
    <Container
      sx={{
        height: "100vh",
        background: "no-repeat 0% 20% url('FM.svg')",
        backgroundSize: "100%",
        display: "flex",
        justifyContent: "center",
        position: "relative",
      }}
    >
      <Card
        sx={{
          boxShadow: "none",
          background: "none",
          marginTop: "180px",
        }}
      >
        <CardMedia component="img" image="radio.png" />
        <Box
          sx={{ display: "flex", justifyContent: "center", marginTop: "32px" }}
        >
          <IconButton>
            <SkipPreviousIcon fontSize="large" />
          </IconButton>
          <IconButton onClick={handlePlay}>
            <PlayArrowIcon fontSize="large" />
          </IconButton>
          <IconButton>
            <SkipNextIcon fontSize="large" />
          </IconButton>
        </Box>
      </Card>
      <Box sx={{ position: "absolute", bottom: "0", zIndex: "-1" }}>
        <ReactPlayer url={currentPlay.url} playing={isPlaying} />
      </Box>
    </Container>
  );
};

export default Player;
