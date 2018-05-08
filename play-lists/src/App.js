import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Aggregate extends Component {
  render() {
    return (
      <div style={{ width: '40%', display: 'inline-block' }}>
        <h2>Number Text </h2>
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
      <div style={{width: '25%'}}>
        <img />
        <h3>Playlist Name</h3>
        <ul><li>Song 1</li><li>Song 2</li><li>Song 3</li></ul>
      </div>
    );
  }
}

class App extends Component {
  render() {
    let name = 'Tony';
    let green = '#ffff';
    let headerStyle = { color: green, 'font-size': '50px' }
    return (
      <div className="App">
        <h1>Title</h1>
        <Aggregate />
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
