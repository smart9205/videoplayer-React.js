import React, { useEffect, useRef, useState } from "react";
import "./App.css";

import ReactPlayer from 'react-player';

// import video from "./assets/play23.mp4";


const App = () => {
  const videoElement = useRef(null);
  // const videosrc ="https://limited38.todostreaming.es/live/101tv-AntequeraHD.m3u8";
  const videosrc = "https://www.youtube.com/watch?v=kFMWuq2zRCs"
 
  useEffect (()=>{
      console.log("time", videoElement.current.getCurrentTime())
  })

  const [isPlaying, setPlaying] = useState(false)
  const [progress, setProgress] = useState(0)
  const [play, setPlay] = useState(false);
  
  const handleVideoProgress = (event) => {
    const manualChange = Number(event.target.value);
    const timeTo = (videoElement.current.getDuration() / 100) * manualChange;
    console.log("timeTo", timeTo)
    console.log("dur", videoElement.current.getDuration())
    videoElement.current.seekTo(timeTo, 'seconds')
    setProgress(manualChange);
  };

  const togglePlay = () => {  
    setPlay(!isPlaying)
    isPlaying = setPlaying(!isPlaying)
};
  

  return (
    <div className="container">
      <div className="video-wrapper">
        <ReactPlayer
            className="react-player"
            url={videosrc}
            ref={videoElement}
            onPlay={() => setPlay(true)}
            onPause={() => setPlay(false)}
            // onDuration ={(duration) => {
            //     let videoDr = duration
            // }}
            // onProgress={(progress) =>{
            //     if (videoDr>0){
            //         let videoEls = progress.played * videoDr
            //         console.log("Elasped:", videoEls)
            //     }                                    
            // }}
            playing={play}
            // playbackRate={PLAYBACK_RATE[playRate].rate}
            // controls={true}
            // width="97%"
            // height="97%"
            style={{
                pointerEvents: 'auto'
            }}
        />

        <div className="controls">
            <button onClick={togglePlay}>
              {!isPlaying ? (
                <span className="bx-play"></span>
              ) : (
                <span className="bx-pause"></span>
              )}
            </button>
          <input
            type="range"
            min="0"
            max="100"
            value={progress}
            onChange={(e) => handleVideoProgress(e)}
          />          
        </div>
      </div>
    </div>
  );
};

export default App;