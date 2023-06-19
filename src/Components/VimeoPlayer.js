import React, { useRef, useEffect } from 'react';
import Vimeo from '@vimeo/player';

const VimeoPlayer = ({ videoId }) => {
  const playerRef = useRef(null);

  useEffect(() => {
    // Create a new Vimeo player instance
    const player = new Vimeo(playerRef.current, {
      id: videoId,
      width: "100%",
        loop: true
    });

    return () => {
      // Clean up the player when the component unmounts
      player.unload();
    };
  }, [videoId]);

  return <div ref={playerRef}></div>;
};

export default VimeoPlayer;
