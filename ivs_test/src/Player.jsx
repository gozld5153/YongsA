import React, { useRef, useEffect, useState } from "react";

export default function Player({ streamUrl }) {
  const { IVSPlayer } = window;
  const { isPlayerSupported } = IVSPlayer;
  const videoEl = useRef(null);
  const player = useRef(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const { ENDED, PLAYING, READY } = IVSPlayer.PlayerState;
    const { ERROR } = IVSPlayer.PlayerEventType;

    if (!isPlayerSupported) {
      console.warn(
        "The current browser does not support the Amazon IVS player."
      );

      return;
    }

    const onStateChange = () => {
      const playerState = player.current.getState();

      console.log(`Player State - ${playerState}`);
      // setLoading(playerState !== PLAYING);
    };

    const onError = (err) => {
      console.warn("Player Event - ERROR:", err);
    };

    player.current = IVSPlayer.create();
    player.current.attachHTMLVideoElement(videoEl.current);
    player.current.load(streamUrl);
    player.current.play();

    player.current.addEventListener(READY, onStateChange);
    player.current.addEventListener(PLAYING, onStateChange);
    player.current.addEventListener(ENDED, onStateChange);
    player.current.addEventListener(ERROR, onError);

    return () => {
      player.current.removeEventListener(READY, onStateChange);
      player.current.removeEventListener(PLAYING, onStateChange);
      player.current.removeEventListener(ENDED, onStateChange);
      player.current.removeEventListener(ERROR, onError);
    };
  }, [IVSPlayer, streamUrl, isPlayerSupported]);

  return <video ref={videoEl} playsInline></video>;
}
