import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

let mockServerData = {
  user: {
    name: 'Tony',
    playlists: [
      {
        name: 'My Favourites',
        songs: ['Beat it', 'Take on me', 'Im Cursed'],
      },
      {
        name: 'Old Rock',
        songs: ['Working Man', 'Surgar Man', 'Superman cant walk'],
      },
      {
        name: 'Study',
        songs: ['Narc', 'Ace of Spades', 'Swamp Thing'],
      },
      {
        name: 'Oldies',
        songs: ['Misses Robinson', 'Take on me', 'Why dont you do right'],
      },
    ]
  }
}

class Aggregate extends Component {
  render() {
    return (
      <div style={{ width: '40%', display: 'inline-block' }}>
        <h2>{this.props.playlists && 
          this.props.playlists.length} Text </h2>
      </div>
    );
  }
}

class Search extends Component {
  render() {
    return (
      <div>
        <img />
        <input type='text' />
      </div>
    )
  }
}

class PlayList extends Component {
  render() {
    return (
      <div style={{ width: '25%' }}>
        <img />
        <h3>Playlist Name</h3>
        <ul><li>Song 1</li><li>Song 2</li><li>Song 3</li></ul>
      </div>
    );
  }
}

class App extends Component {
  constructor() {
    super()
    this.state = { serverData: {} }
  }
  componentDidMount() {
    setTimeout(() => {
    this.setState({ serverData: mockServerData });
  }, 2000);
}
  render() {
    let green = '#ffff';
    let headerStyle = { color: green, 'font-size': '50px' }
    return (
      <div className="App">
      {this.state.serverData.user && <h1>
        {this.state.serverData.user.name}'s PlayList
        </h1>}
        <h1>Title</h1>
        <Aggregate playlists={this.state.serverData.user &&
          this.state.serverData.user.playlists}/>
        <Aggregate />
        <Search />
        <PlayList />
        <PlayList />
        <PlayList />

      </div>
    );
  }
}

export default App;
