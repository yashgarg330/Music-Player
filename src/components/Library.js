import React from "react";
import LibrarySong from "./LibrarySong";

const Library = ({
  audioRef,
  songs,
  setCurrentSong,
  isPlaying,
  setSongs,
  libraryStatus,
}) => {
  return (
    <div className={`library ${libraryStatus ? "active-library" : ""} `}>
      <h2>Library</h2>
      <div className="library-songs">
        {songs.map((currentSong) => (
          <LibrarySong
            audioRef={audioRef}
            currentSong={currentSong}
            songs={songs}
            setCurrentSong={setCurrentSong}
            isPlaying={isPlaying}
            setSongs={setSongs}
            key={currentSong.id}
          />
        ))}
      </div>
    </div>
  );
};

export default Library;
