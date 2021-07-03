import React from "react";
import { playAudio } from "../util";

const LibrarySong = ({
  audioRef,
  currentSong,
  setCurrentSong,
  songs,
  isPlaying,
  setSongs,
}) => {
  const songSelectHandler = () => {
    setCurrentSong(currentSong);
    //Add Active State
    const newSongs = songs.map((song) => {
      if (song.id === currentSong.id) {
        return {
          ...song,
          active: true,
        };
      } else {
        return {
          ...song,
          active: false,
        };
      }
    });
    setSongs(newSongs);
    //check if the song is playing
    playAudio(isPlaying, audioRef);
  };
  return (
    <div
      onClick={songSelectHandler}
      className={`library-song ${currentSong.active ? "selected" : ""}`}
    >
      <img src={currentSong.cover} alt={currentSong.name} />
      <div className="song-description">
        <h3>{currentSong.name}</h3>
        <h4>{currentSong.artist}</h4>
      </div>
    </div>
  );
};

export default LibrarySong;
