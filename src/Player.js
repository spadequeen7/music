import React from "react";
import ReactPlayer from "react-player";
import {
  Container,
  Card,
  Box,
  CardMedia,
  IconButton,
  Typography,
  LinearProgress,
} from "@mui/material";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import PauseIcon from "@mui/icons-material/Pause";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlayCircle,
  faPause,
  faStepBackward,
  faStepForward,
} from "@fortawesome/free-solid-svg-icons";
import { shuffle } from "lodash";
import { data } from "./playlist";

const Player = (props) => {
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [playList, setPlayList] = React.useState(shuffle(data));

  const handlePlay = () => {
    setIsPlaying((prevState) => !prevState);
  };

  // const handlePlayLast = () => {
  //   if (currentIndex === 0) {
  //     setCurrentIndex(playList.length - 1);
  //   } else {
  //     setCurrentIndex((prevState) => prevState - 1);
  //   }
  // };

  const handlePlayNext = () => {
    if (currentIndex === playList.length - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex((prevState) => prevState + 1);
    }
    setIsPlaying(true);
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
        <Box sx={{ marginTop: "24px" }}>
          <Typography variant="h6">{playList[currentIndex].name}</Typography>
          <Typography variant="subtitle2" sx={{ opacity: 0.5 }}>
            {playList[currentIndex].artist}
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            marginTop: "24px",
            columnGap: "24px",
            height: "40px",
          }}
        >
          {/* <IconButton onClick={handlePlayLast}>
            <FontAwesomeIcon icon={faStepBackward} />
          </IconButton> */}
          <IconButton
            onClick={handlePlay}
            sx={{ fontSize: isPlaying ? "24px" : "40px", width: "32px" }}
          >
            {isPlaying ? (
              <FontAwesomeIcon icon={faPause} />
            ) : (
              <FontAwesomeIcon icon={faPlayCircle} />
            )}
          </IconButton>
          {/* <IconButton onClick={handlePlayNext}>
            <FontAwesomeIcon icon={faStepForward} />
          </IconButton> */}
        </Box>
      </Card>
      <Box sx={{ position: "absolute", bottom: "0", zIndex: "-1" }}>
        <ReactPlayer
          url={playList[currentIndex].url}
          playing={isPlaying}
          onEnded={handlePlayNext}
        />
      </Box>
    </Container>
  );
};

export default Player;
