import React, { useEffect, useState } from "react";
import {
  Laptop2,
  LayoutList,
  Maximize2,
  Mic2,
  Repeat,
  Shuffle,
  SkipBack,
  SkipForward,
  Volume,
} from "lucide-react";

export default function Footer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  const audio = new Audio("/AlanWalker.mp3");
  let intervalId;

  audio.addEventListener("play", () => {
    intervalId = setInterval(() => {
      setCurrentTime(audio.currentTime);
    }, 500);
  });

  audio.addEventListener("pause", () => {
    clearInterval(intervalId);
  });

  audio.addEventListener("loadedmetadata", () => {
    setDuration(audio.duration);
  });

  useEffect(() => {
    if (!isPlaying) {
      audio.pause();
    }
    if (isPlaying) {
      audio.play();
    }
    return () => {
      audio.removeEventListener("loadedmetadata", () => {});
      audio.removeEventListener("timeupdate", () => {});
      audio.pause();
    };
  }, [isPlaying]);

  const handlePlay = () => {
    setIsPlaying((prevState) => !prevState);
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60)
      .toString()
      .padStart(2, "0");
    return `${minutes}:${seconds}`;
  };
  return (
    <footer className="bg-zinc-800 border-t  border-zinc-700 px-6 py-4 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <img src="/CapaAlanWalker.jpeg" alt="" width={56} height={56}></img>
        <div className="flex flex-col">
          <strong className="font-normal">Dreamer</strong>
          <span className=" text-xs text-zinc-400">Alan Walker</span>
        </div>
      </div>
      <div>
        <div className=" flex flex-col items-center gap-2">
          <div className="flex items-center  gap-6">
            <Shuffle className="text-zinc-200" size={20} />
            <SkipBack className="text-zinc-200" size={20} />
            <div
              className={
                isPlaying
                  ? "rounded-full w-6 h-6 flex items-center justify-center bg-none"
                  : "bg-white rounded-full w-6 h-6 flex items-center justify-center"
              }
              onClick={handlePlay}
            >
              {isPlaying ? (
                <img
                  src="/pause-circle.png"
                  width={26}
                  height={26}
                  alt="Pause button in playlist"
                />
              ) : (
                <img
                  src="/play-fill.svg"
                  width={16}
                  height={16}
                  alt="Play button in playlist"
                />
              )}
            </div>
            <SkipForward className="text-zinc-200" size={20} />
            <Repeat className="text-zinc-200" size={20} />
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs text-zinc-400">
              {formatTime(currentTime)}
            </span>
            <div className="h-1 rounded-full w-96 bg-zinc-600">
              <div
                className="bg-zinc-200 w-40 h-1 rounded-full"
                style={{ width: `${(currentTime / duration) * 100}%` }}
              ></div>
            </div>
            <span className="text-xs text-zinc-400">
              {formatTime(duration !== 0 ? duration : 155)}
            </span>
          </div>
        </div>
      </div>
      <div>
        <div className="flex items-center gap-4">
          <Mic2 size={20} />
          <LayoutList size={20} />
          <Laptop2 size={20} />
          <div className="flex items-center gap-2">
            <Volume size={20} />
            <div className="h-1 rounded-full w-24 bg-zinc-600">
              <div className="bg-zinc-200 w-12 h-1 rounded-full"></div>
            </div>
          </div>
          <Maximize2 size={20} />
        </div>
      </div>
    </footer>
  );
}
