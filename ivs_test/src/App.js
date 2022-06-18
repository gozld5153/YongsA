import Player from "./Player";

const STREAM_PLAYBACK_URL =
  "https://2f95d61f6b2c.us-east-1.playback.live-video.net/api/video/v1/us-east-1.523622290520.channel.N3DRALkucBxx.m3u8";

function App() {
  return (
    <div className="App">
      <Player streamUrl={STREAM_PLAYBACK_URL} />
    </div>
  );
}

export default App;
