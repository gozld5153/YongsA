import React from "react";

import MiniPlayer from "./components/mini-player";
// import { CONTROLS, POSITION } from "./components/mini-player";

import "./App.css";

const STREAM_PLAYBACK_URL =
  "https://2f95d61f6b2c.us-east-1.playback.live-video.net/api/video/v1/us-east-1.523622290520.channel.N3DRALkucBxx.m3u8";

const App = () => {
  return (
    <div className="App">
      <MiniPlayer
        streamUrl={STREAM_PLAYBACK_URL}
        // controls={[CONTROLS.resize, CONTROLS.close, CONTROLS.mute]}
        // position={POSITION.bottomRight}
        // transition
      />

      {[...Array(20)].map((_, i) => (
        <div className="App-contentPlaceholder" key={i} />
      ))}
    </div>
  );
};

export default App;
