import React, { useRef, useEffect } from "react";

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

  useEffect(() => {
    const audioElement = audioRef.current;
    if (!audioElement) return;

    const handleEnded = () => {
      console.log("has ended");
      audioElement.currentTime = 0;
      audioElement.play();
    };

    audioElement.addEventListener("ended", handleEnded);

    return () => {
      audioElement.removeEventListener("ended", handleEnded);
    };
  }, [audioRef]);

  return (
    <div>
      <audio ref={audioRef}>
        <source src="/assets/music/TevaBoss.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};

export default AudioPlayer;
