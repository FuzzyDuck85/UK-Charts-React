import React from 'react';
import ChartSelect from '../components/ChartSelect.js';
import ChartDetail from '../components/ChartDetail.js';

class ChartContainer extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      songs: [],
      selectedSongId: ""
    }
    this.handleSongSelected = this.handleSongSelected.bind(this);
  }

  componentDidMount(){
    const url = "https://itunes.apple.com/gb/rss/topsongs/limit=20/json";

    fetch(url)
    .then(res => res.json())
    .then(songs => this.setState({songs: songs.feed.entry}))
    .catch(err => console.error)
  }

  handleSongSelected(id){
    this.setState({selectedSongId: id})
  }

  render(){

    const selectedSong = this.state.songs.find(song => this.state.selectedSongId === song.id.label)


    return(
      <div>
      <h2>iTunes UK Top 20 Music Charts</h2>
        <ChartSelect songs={this.state.songs}
        onSongSelected={this.handleSelectedSong} />
        <ChartDetail selectedSong={selectedSong} />
      </div>
    );
  }
}

export default ChartContainer;
