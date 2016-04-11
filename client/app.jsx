import React from 'react';
import Nav from './nav.js';
import SongPlayer from './songplayer.js'

class App extends React.Component {
  
  constructor(props) {
    super(props);
    
    this.state = {
      tracks: [],
      currentTrack: null 
    }
  } 

  componentDidMount() {
    //Invoked once, only on the client (not on the server), immediately after the initial rendering occurs. 
    //we will have the page execute the AJAX requests to SoundCloud, YouTube and Spotify
    //to populate the body with the initial 'SUGGESTED' content

    //INSERT CALLS TO THE AJAX REQUESTS HERE

  }

  render() {
    return (
      <div> 
          <h1>Crunchy Tunes</h1>
            <h2> More tunesssss</h2>
          <Nav />
          <SongPlayer />

      </div>
    );
  }
};


export default App;