import React, { useState } from "react";
//Adding Styles
import "./styles/App.scss";
//Adding Components
import Player from "./components/Player";
import Song from "./components/Song";
import Library from "./components/Library";
//Import App data
import data from "./util"

const App = () => {
    //State
    const [songs, setSongs] = useState(data());
    const [currentSongs, setcurrentSongs] = useState(songs[0]);
    const [isPlaying, setIsPlaying] = useState(false);
    return (
        <div>
            <Song currentSongs={currentSongs} />
            <Player isPlaying={isPlaying} setIsPlaying={setIsPlaying} currentSongs={currentSongs} />
            <Library songs = {songs} />
        </div>
    );
}

export default App;