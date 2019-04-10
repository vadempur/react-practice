import React from "react";
import { connect } from "react-redux";

const SongDetail = ({selectedSong}) => {
    if(!selectedSong){
        return <div>select song for detail</div>
    }
     return (<div>Song detail
          <h3>title:{selectedSong.title}</h3>
          <h4>duration:{selectedSong.duration}</h4>
     </div>)
};

const mapStatetoProps = state => {
  return { selectedSong: state.selectedSong };
};

export default connect(mapStatetoProps)(SongDetail);
