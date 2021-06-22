import React from "react";
//Adding Styles
import "./styles/App.scss";
//Adding Components
import Player from "./components/Player";
import Song from "./components/Song";


const App = () => {
    return (
        <div>
            <Song />
            <Player />
        </div>
    );
}

export default App;