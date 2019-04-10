//reducer
import { combineReducers } from "redux";

const songListReducer = () => {
  return [
    { title: "song-1", duration: "4:30" },
    { title: "song-2", duration: "3:30" },
    { title: "song-3", duration: "4:10" },
    { title: "song-4", duration: "5:30" }
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECED") {
    return action.payload;
  }
  return selectedSong;
};

export default combineReducers({
songs:songListReducer,
selectedSong:selectedSongReducer
})