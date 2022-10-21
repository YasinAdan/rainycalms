import React, { useRef, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay, faCirclePause } from "@fortawesome/free-solid-svg-icons";

//assets
import rainvideo from "../assets/rainvideo2.mp4";
import rainsoundaudio from "../assets/rainsoundaudio.mp3";
import Quotes from "./Quotes";

const Main = () => {
  const [playing, setPlaying] = useState(true);
  const audioRef = useRef();

  const playHander = () => {
    playing ? audioRef.current.play() : audioRef.current.pause();
    setPlaying(!playing);
  };

  return (
    <div className="wrapper">
      <video autoPlay loop muted>
        <source src={rainvideo} type="video/mp4" />
      </video>
      <audio src={rainsoundaudio} ref={audioRef} loop></audio>
      <button className="audio-btn" onClick={playHander}>
        <FontAwesomeIcon
          icon={playing ? faCirclePlay : faCirclePause}
          size="6x"
        />
      </button>
      <Quotes />
    </div>
  );
};

export default Main;
