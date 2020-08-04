import React from 'react';

const ChartSelect = (props) => {

const options = props.songs.map(song => {
  return <option value={song.title.label} key={song.id.label}>{song.title.label}</option>
});

function handleChange(event){
  props.onSongSelected(event.target.value);
}

return (
  <select id="song-selector" defaultValue="default" onChange={handleChange}>
  <option disabled value="default"> Choose a song from the Top 20...</option>
  {options}
  </select>
)
}

export default ChartSelect;
