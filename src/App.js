import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

let mockServerData = {
  user: {
    name: 'Tony',
    playlists: [
      {
        name: 'My Favourites',
        songs: [{ name: 'Beat it', duration: 1233 },
        { name: 'Take on me', duration: 21000 },
        { name: 'Im Cursed', duration: 23110 }],
      },
      {
        name: 'Old Rock',
        songs: [{ name: 'Working Man', duration: 34000 },
        { name: 'Surgar Man', duration: 32202 },
        { name: 'Superman cant walk', duration: 23000 }],
      },
      {
        name: 'Study',
        songs: [{ name: 'Narc', duration: 54000 },
        { name: 'Ace of Spades', duration: 45000 },
        { name: 'Swamp Thing', duration: 34404 }],
      },
      {
        name: 'Oldies',
        songs: [{ name: 'Misses Robinson', duration: 42000 },
        { name: 'Take on me', duration: 24000 },
        { name: 'Why dont you do right', duration: 43300 }],
      },
    ]
  }
}

class PlaylistCounter extends Component {
  render() {
    return (
      <div style={{ width: '40%', display: 'inline-block' }}>
        <h2>{this.props.playlists.length} Text </h2>
      </div>
    );
  }
}

class PlayListHours extends Component {
  render() {
    let allSongs = this.props.playlists.reduce((songs, eachPlaylist) => {
      return songs.concat(eachPlaylist.songs)
    }, [])
    let totalDuration = allSongs.reduce((sum, eachSong) => {
      return sum + eachSong.duration
    }, 0)
    return (
      <div style={{ width: '40%', display: 'inline-block' }}>
        <h2>{Math.floor(totalDuration / 60)} hours</h2>
      </div>
    );
  }
}

class Search extends Component {
  render() {
    return (
      <div>
        <img />
        <input type='text' onChange={event => this.props.onTextChange(event.target.value)} />
      </div>
    )
  }
}

class PlayList extends Component {
  render() {
    return (
      <div style={{ width: '25%', display: 'inline-block' }}>
        <img />
        <h3>{this.props.playlist.name}</h3>
        <ul >
          {this.props.playlist.songs.map(song =>
            <li >{song.name}</li>
          )}
        </ul>
      </div>
    );
  }
}

class App extends Component {
  constructor() {
    super()
    this.state = {
      serverData: {},
      filterString: ''
    }
  }
  componentWillMount() {
    setTimeout(() => {
      this.setState({ serverData: mockServerData });
    }, 2000);
  }
  render() {
    let green = '#ffff';
    let headerStyle = { color: green, 'font-size': '50px' }
    let playlistToRender = this.state.serverData.user ? this.state.serverData.user.playlists
      .filter(playlist =>
        playlist.name.toLowerCase().includes(
          this.state.filterString.toLowerCase())
        ) : []
    return (
      <div className="App">
        {this.state.serverData.user ?
          <div>
            <h1>
              {this.state.serverData.user.name}'s PlayList
          </h1>
            <h1>Title</h1>
            <PlaylistCounter playlists={playlistToRender} />
            <PlayListHours playlists={playlistToRender} />
            <Search onTextChange={text => this.setState({ filterString: text })} />
            {playlistToRender.map(playlist =>
              <PlayList playlist={playlist} />
            )} 
            <h3> No results to display </h3>
          </div> : <h1>Loading...</h1>
        }
      </div>
    );
  }
}

export default App;
