import React, { useRef, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay, faCirclePause } from "@fortawesome/free-solid-svg-icons";

//assets
import rainvideo from "../assets/rainvideo2.mp4";
import rainsoundaudio from "../assets/rainsoundaudio.mp3";
import Quotes from "./Quotes";

const Main = () => {
  const [playing, setPlaying] = useState(true);
  const [volume, setVolume] = useState(0.15);

  const audioRef = useRef();
  const volRef = useRef();

  const playHander = () => {
    audioRef.current.volume = volume;
    playing ? audioRef.current.play() : audioRef.current.pause();
    setPlaying(!playing);
  };

  const volumeHandler = () => {
    setVolume(volRef.current.value);
    audioRef.current.volume = volRef.current.value;
    console.log(volume / 100);
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
          className="audio-border"
        />
      </button>

      <div class="slider-container">
        <span class="bar">
          <span class="fill"></span>
        </span>
        <input
          type="range"
          className="slider"
          ref={volRef}
          min={0.0}
          max={1}
          step={0.01}
          value={volume}
          onChange={volumeHandler}
        />
      </div>
      <Quotes />
    </div>
  );
};

export default Main;
