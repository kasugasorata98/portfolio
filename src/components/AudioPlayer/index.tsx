import React, { useRef, useEffect, useState } from "react";

const AudioPlayer: React.FC<{
  play: boolean;
}> = ({ play }) => {
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (audioRef.current && play) {
      audioRef.current.currentTime = 0;
      audioRef.current.play();
    } else {
      audioRef.current?.pause();
    }
  }, [play, audioRef]);

  return (
    <div>
      <audio ref={audioRef} autoPlay={true}>
        <source src="/assets/music/TevaBoss.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};

export default AudioPlayer;
