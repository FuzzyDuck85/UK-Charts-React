import React from 'react';

const ChartDetail = (props) => {
  if(!props.selectedSong) return null;
  return (
    <div>
      <img src={props.selectedSong["im:image"][2]["label"]} alt="song-image" />
      <h2>{props.selectedSong["im:name"]["label"]}</h2>
      <h3>{props.selectedSong["im:artist"]["label"]}</h3>
      <p>Genre: {props.selectedSong["category"]["attributes"]["term"]}</p>
      <p>Album: {props.selectedSong["im:collection"]["im:name"]["label"]}</p>
    </div>
  )
}

export default ChartDetail;
