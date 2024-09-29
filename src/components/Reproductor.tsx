"use client";
import React, { useState, useRef, useEffect } from "react";
import Slider from "@mui/material/Slider";
import { ImMinus } from "react-icons/im";
import { FaList } from "react-icons/fa";
import { IoIosRadio } from "react-icons/io";
import { CiPause1 } from "react-icons/ci";
import {
  HiOutlineBackward,
  HiOutlinePlay,
  HiOutlineForward,
  HiOutlineStop,
} from "react-icons/hi2";
import {
  IoVolumeMuteOutline,
  IoVolumeMediumOutline,
  IoVolumeLowOutline,
} from "react-icons/io5";

import { songsdata, radiosdata } from "@/app/reproductor/audiosapp";

export default function ReproductorMusicaComponente() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);
  const [isVolumeTooltipVisible, setIsVolumeTooltipVisible] = useState(false);
  const [isRadioTooltipVisible, setIsRadioTooltipVisible] = useState(false);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [currentRadioIndex, setCurrentRadioIndex] = useState<number | null>(
    null,
  );

  const [elapsed, setElapsed] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(5); // Volumen predeterminado al 5%
  const [isMuted, setIsMuted] = useState(false); // Estado de mute
  const [isMobile, setIsMobile] = useState(false); // Estado para detectar versión móvil
  const previousVolume = useRef(volume); // Almacenar el volumen antes de mutear
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const expandPlayer = () => {
    setIsExpanded(!isExpanded);
  };

  const toggleTooltip = () => setIsTooltipVisible(!isTooltipVisible);
  const toggleRadioTooltip = () =>
    setIsRadioTooltipVisible(!isRadioTooltipVisible);

  useEffect(() => {
    const handleResize = () => {
      const isMobileSize = window.innerWidth <= 768;
      setIsMobile(isMobileSize);
      if (isMobileSize && !isExpanded) {
        setIsExpanded(false); // Expande automáticamente si es móvil
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Comprobar el tamaño de la ventana al cargar

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isExpanded]);

  useEffect(() => {
    if (isMobile) {
      setVolume(100); // Establecer volumen predeterminado al 100% en versión móvil
    }
  }, [isMobile]);

  useEffect(() => {
    if (!audioRef.current) {
      audioRef.current = new Audio();
    }

    const audio = audioRef.current;
    audio.volume = volume / 100; // Establecer volumen predeterminado

    const updateProgress = () => {
      setElapsed(audio.currentTime);
      setDuration(audio.duration);
    };

    const handleSongEnd = () => {
      handleForward();
    };

    audio.addEventListener("timeupdate", updateProgress);
    audio.addEventListener("loadedmetadata", updateProgress);
    audio.addEventListener("ended", handleSongEnd);

    return () => {
      audio.removeEventListener("timeupdate", updateProgress);
      audio.removeEventListener("loadedmetadata", updateProgress);
      audio.removeEventListener("ended", handleSongEnd);
    };
  }, [volume]);

  useEffect(() => {
    const audio = audioRef.current;
    if (currentRadioIndex !== null) {
      audio!.src = radiosdata[currentRadioIndex].url;
    } else {
      audio!.src = songsdata[currentSongIndex].url;
    }
    if (isPlaying) {
      audio!.play();
    }
  }, [currentSongIndex, currentRadioIndex, isPlaying]);

  useEffect(() => {
    const audio = audioRef.current;
    if (isPlaying) {
      audio!.play();
    } else {
      audio!.pause();
    }
  }, [isPlaying]);

  useEffect(() => {
    audioRef.current!.volume = isMuted ? 0 : volume / 100;
  }, [isMuted, volume]);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleStop = () => {
    const audio = audioRef.current;
    audio!.pause();
    audio!.currentTime = 0;
    setIsPlaying(false);
  };

  const handleRewind = () => {
    const audio = audioRef.current;
    if (audio!.currentTime > 2) {
      audio!.currentTime = 0;
    } else if (currentRadioIndex !== null) {
      setCurrentRadioIndex((prevIndex) =>
        prevIndex !== null ? (prevIndex > 0 ? prevIndex - 1 : null) : null,
      );
    } else {
      setCurrentSongIndex((prevIndex) =>
        prevIndex !== null
          ? prevIndex > 0
            ? prevIndex - 1
            : songsdata.length - 1
          : 0,
      );
    }
  };

  const handleForward = () => {
    if (currentRadioIndex !== null) {
      setCurrentRadioIndex((prevIndex) =>
        prevIndex !== null ? (prevIndex + 1) % radiosdata.length : 0,
      );
    } else {
      setCurrentSongIndex((prevIndex) =>
        prevIndex !== null ? (prevIndex + 1) % songsdata.length : 0,
      );
    }
  };

  const handleRadioSelect = (index: number) => {
    setCurrentRadioIndex(index);
    setCurrentSongIndex(currentSongIndex !== null ? currentSongIndex : -1); // Deselect song
    // Deselect song
    setIsPlaying(true); // Comienza a reproducir automáticamente la radio seleccionada
  };

  const handleSongSelect = (index: number) => {
    setCurrentSongIndex(index);
    setCurrentRadioIndex(null); // Deselect radio
    setIsPlaying(true); // Comienza a reproducir automáticamente la canción seleccionada
  };

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
  };

  const handleProgressChange = (event: Event, newValue: number | number[]) => {
    if (typeof newValue === "number" && audioRef.current) {
      // Verificamos que audioRef.current no sea null
      const newElapsed = (newValue / 100) * duration;
      audioRef.current.currentTime = newElapsed; // Accedemos solo si no es null
      setElapsed(newElapsed);
    }
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleVolumeChange = (_event: unknown, newValue: number | number[]) => {
    setVolume(newValue as number);
    if (audioRef.current) {
      audioRef.current.volume = (newValue as number) / 100;
    }
    if (isMuted) setIsMuted(false); // Desmutear si se ajusta el volumen
  };

  const toggleMute = () => {
    if (isMuted) {
      setVolume(previousVolume.current); // Restaurar el volumen previo
    } else {
      previousVolume.current = volume; // Guardar el volumen actual
      setVolume(0); // Mutear
    }
    setIsMuted(!isMuted);
  };

  const getVolumeIcon = () => {
    if (isMuted || volume === 0) {
      return <IoVolumeMuteOutline className="btn-vol" size="1.6rem" />;
    } else if (volume <= 66) {
      return <IoVolumeLowOutline className="btn-vol" size="1.6rem" />;
    } else {
      return <IoVolumeMediumOutline className="btn-vol" size="1.6rem" />;
    }
  };

  return (
    <div
      className={`music-player z-30 hidden bg-white dark:border-white/80 dark:bg-transparent/80 sm:flex ${isExpanded ? "expanded" : ""}`}
    >
      {!isExpanded && (
        <div
          className="audio-waves-icon bg-white dark:bg-transparent"
          onClick={expandPlayer}
        >
          <div
            className={`wave bg-black delay-100 dark:bg-white ${isPlaying ? "playing" : ""}`}
          ></div>
          <div
            className={`wave2 bg-black delay-200 dark:bg-white ${isPlaying ? "playing" : ""}`}
          ></div>
          <div
            className={`wave3 bg-black delay-500 dark:bg-white ${isPlaying ? "playing" : ""}`}
          ></div>
          <div
            className={`wave2 bg-black delay-200 dark:bg-white ${isPlaying ? "playing" : ""}`}
          ></div>
          <div
            className={`wave bg-black delay-100 dark:bg-white ${isPlaying ? "playing" : ""}`}
          ></div>
        </div>
      )}
      {isExpanded && (
        <div className="containermusicapp box-border flex h-full w-full flex-col items-center justify-center">
          <div className="imageApp-container box-border flex h-full w-full flex-grow-[1] items-center justify-center overflow-hidden">
            <div className="ImageApp flex h-full w-full items-center justify-center">
              <img
                src={
                  currentRadioIndex !== null
                    ? radiosdata[currentRadioIndex].musicimage
                    : songsdata[currentSongIndex].musicimage
                }
                alt="Album Cover"
                className="block max-h-full max-w-full rounded-xl object-cover"
              />
            </div>
          </div>

          <div className="controlsmusicapp mt-4 flex h-[10%] w-full items-center justify-around">
            <div className="control-group btnplay mb-2 flex flex-row">
              <HiOutlineBackward
                className="btn-vol m-1 cursor-pointer transition-all hover:m-1 hover:rounded"
                size="1.6rem"
                onClick={handleRewind}
              />
              {isPlaying ? (
                currentRadioIndex !== null ? (
                  <HiOutlineStop
                    className="btn-vol m-1 cursor-pointer transition-all hover:m-1 hover:rounded"
                    size="1.6rem"
                    onClick={handleStop}
                  />
                ) : (
                  <CiPause1
                    className="btn-vol m-1 cursor-pointer transition-all hover:m-1 hover:rounded"
                    size="1.6rem"
                    onClick={handlePlayPause}
                  />
                )
              ) : (
                <HiOutlinePlay
                  className="btn-vol m-1 cursor-pointer transition-all hover:m-1 hover:rounded"
                  size="1.6rem"
                  onClick={handlePlayPause}
                />
              )}
              <HiOutlineForward
                className="btn-vol m-1 cursor-pointer transition-all hover:m-1 hover:rounded"
                size="1.6rem"
                onClick={handleForward}
              />
            </div>
            <div className="control-group btnmenu mb-2 flex flex-row">
              <div
                className="btn"
                onMouseEnter={toggleTooltip}
                onMouseLeave={toggleTooltip}
              >
                <FaList
                  className="btn-vol m-1 cursor-pointer transition-all hover:m-1 hover:rounded"
                  style={{ verticalAlign: "middle" }}
                />
                {isTooltipVisible && (
                  <div className="tooltip absolute bottom-[40%] right-0 flex max-h-[11.3rem] w-full flex-col overflow-y-auto rounded-lg border border-black bg-white p-2 dark:border-white dark:bg-black">
                    {songsdata.map((song, index) => (
                      <div
                        key={index}
                        className="TitleSongMenu flex cursor-pointer flex-row items-center gap-1 p-1 text-sm hover:bg-[#dadada] dark:hover:bg-[#242424]"
                        onClick={() => handleSongSelect(index)}
                      >
                        <HiOutlinePlay
                          className="btn-link"
                          size="0.7rem"
                          style={{ verticalAlign: "middle" }}
                        />{" "}
                        {song.title}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div
                className="btn"
                onMouseEnter={toggleRadioTooltip}
                onMouseLeave={toggleRadioTooltip}
              >
                <IoIosRadio
                  className="btn-vol m-1 cursor-pointer transition-all hover:m-1 hover:rounded"
                  size="1.3rem"
                  style={{ verticalAlign: "middle" }}
                />
                {isRadioTooltipVisible && (
                  <div className="tooltip absolute bottom-[40%] right-0 flex max-h-[11.3rem] w-full flex-col overflow-y-auto rounded-lg border border-black bg-white p-2 dark:border-white dark:bg-black">
                    {radiosdata.map((radio, index) => (
                      <div
                        key={index}
                        className="TitleSongMenu flex cursor-pointer flex-row items-center gap-1 p-1 text-sm hover:bg-[#dadada] dark:hover:bg-[#242424]"
                        onClick={() => handleRadioSelect(index)}
                      >
                        <HiOutlinePlay
                          className="btn-link"
                          size="0.7rem"
                          style={{ verticalAlign: "middle" }}
                        />{" "}
                        {radio.title}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="slider-container m-0 flex h-[30%] w-[95%] flex-col gap-0 p-0">
            <div className="titlemusica flex h-full w-full cursor-default flex-col text-xs">
              <p className="TitleMusicaTitle text-[0.7rem] font-medium">
                {currentRadioIndex !== null
                  ? radiosdata[currentRadioIndex].title
                  : songsdata[currentSongIndex].title}
              </p>
              <p className="TitleMusicaArtist m-0 text-[0.6rem] text-[#424242] dark:text-[#888]">
                {currentRadioIndex !== null
                  ? radiosdata[currentRadioIndex].artist
                  : songsdata[currentSongIndex].artist}
              </p>
            </div>
            <div className="slidermusicapp box-border flex h-full w-full flex-row items-center justify-center">
              <div className="SliderBoxTime box-border flex h-full w-full flex-col items-center justify-center">
                <div className="SliderBoxmusicapp box-border flex w-full items-center justify-center">
                  <Slider
                    aria-label="Progress"
                    value={(elapsed / duration) * 100}
                    onChange={handleProgressChange}
                    sx={{
                      color: "gray",
                      "& .MuiSlider-thumb": {
                        borderRadius: "50px",
                      },
                    }}
                  />
                </div>

                <div className="time-info-controller flex h-full w-full">
                  <div className="time-info flex w-full cursor-default justify-between text-xs text-[#2b2b2b] dark:text-[#888]">
                    <span>{formatTime(elapsed)}</span>
                    <span>
                      {currentRadioIndex !== null &&
                      (isNaN(duration) || !isFinite(duration))
                        ? "EN VIVO 🔴"
                        : formatTime(duration)}
                    </span>
                  </div>
                </div>
              </div>
              <div
                className="volume-control flex h-full w-[13%] justify-center"
                onMouseEnter={() =>
                  !isMobile && setIsVolumeTooltipVisible(true)
                }
                onMouseLeave={() => setIsVolumeTooltipVisible(false)}
              >
                <div onClick={toggleMute} className="btnvolumen">
                  {getVolumeIcon()}
                </div>
                {isVolumeTooltipVisible && !isMobile && (
                  // eslint-disable-next-line @typescript-eslint/no-unused-vars
                  <div className="volume-tooltip absolute bottom-[17%] right-0 flex h-8 w-40 flex-col items-center justify-center rounded-lg border border-black bg-white/95 pb-0 pl-4 pr-2 pt-0 dark:border-white dark:bg-transparent/90">
                    <Slider
                      aria-label="Volume"
                      min={0}
                      max={100}
                      step={1}
                      value={volume}
                      valueLabelDisplay="auto"
                      onChange={handleVolumeChange}
                      sx={{
                        color: "gray",
                        "& .MuiSlider-thumb": {
                          borderRadius: "50px",
                        },
                      }}
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {isExpanded && (
        <button
          className="minimize-icon hover:bg-[rgba(224, 224, 224, 0.8)] absolute -top-[27px] right-0 flex h-5 w-5 cursor-pointer items-center justify-center rounded-[50px] border border-black bg-white/95 p-1 text-black transition-all dark:border-white dark:bg-transparent dark:text-white"
          onClick={expandPlayer}
        >
          <ImMinus />
        </button>
      )}
    </div>
  );
}
