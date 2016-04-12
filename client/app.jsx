import React from 'react';
import Nav from './nav.js';
import SongPlayer from './songplayer.jsx'
import CardsContainer from './cardsContainer.jsx'
import AppBar from 'react-toolbox/lib/app_bar';
import Navigation from 'react-toolbox/lib/navigation'
import Link from 'react-toolbox/lib/link';

class App extends React.Component {
  
  constructor(props) {
    super(props);
    
    this.state = {
      tracks: [
      {
        artist: 'Drake',
        id: 1,
        embeddedUrl: <iframe width="280" height="160" src="https://www.youtube.com/embed/Z-48u_uWMHY" frameborder="0" allowfullscreen></iframe>,
        art: 'https://i.ytimg.com/vi/uxpDa-c-4Mc/hqdefault.jpg'
      },
        {
        artist: 'Party Next Door',
        id: 2,
        embeddedUrl: <iframe width="280" height="160" src="https://www.youtube.com/embed/hRK7PVJFbS8" frameborder="0" allowfullscreen></iframe>,
        art: 'https://i1.sndcdn.com/artworks-sH1o90kJvuTt-0-large.jpg'
      },
        {
        artist: 'Rihanna',
        id: 3,
        embeddedUrl: <iframe width="280" height="160" src="https://www.youtube.com/embed/8kyWDhB_QeI" frameborder="0" allowfullscreen></iframe>,
        art: 'https://i.scdn.co/image/660849fa669b8fd072487d557e39232ffdd64479',
      },
        {
        artist: 'Cap\'n Crunch',
        id: 4,
        embeddedUrl: <iframe width="280" height="160" src="https://www.youtube.com/embed/E58qLXBfLrs" frameborder="0" allowfullscreen></iframe>,
        art: 'http://media.getthefive.com/uploads/article_images/biz-110309-crunch.380.jpg',
      },
        {
        artist: 'Kanye West',
        id: 5,
        art: 'https://i.scdn.co/image/aa5b579c2da0dba06b5597127644d3d46f254cdb'
        }
      ],
      currentTrack: null 
    }
  }

  componentDidMount() {
    //Invoked once, only on the client (not on the server), immediately after the initial rendering occurs. 
    //we will have the page execute the AJAX requests to SoundCloud, YouTube and Spotify
    //to populate the body with the initial 'SUGGESTED' content

    //INSERT CALLS TO THE AJAX REQUESTS HERE
  }

  handleCardPlay(track) {
    console.log(track);
    this.setState({
      currentTrack: track
    });
  };

  render() {
    return (
      <div> 
          <AppBar className="appBar" >
            <Navigation type="horizontal" actions={[
              {
                label: 'Crunchy Tunes',
                raised: true,
                accent: true,
                icon: 'audiotrack'
              }]}
              />
          </AppBar>
          <Nav />
          <SongPlayer track={this.state.currentTrack}/>
          <CardsContainer tracks={this.state.tracks}
            handleCardPlay={this.handleCardPlay.bind(this)}/>
          }

      </div>
    );
  }
};


export default App;