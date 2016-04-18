import React from 'react';
import Nav from './nav.js';
import SongPlayer from './songplayer.jsx';
import CardsContainer from './cardsContainer.jsx';
import AppBar from 'react-toolbox/lib/app_bar';
import Navigation from 'react-toolbox/lib/navigation';
import queryAll from './queryAll.js';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tracks: [
        {
          artist: 'Yeezy',
          apiSource: 'test',
        },
      ],
      currentTrack: {
        artist: 'Yeezy',
        apiSource: 'test',
      },
    };
  }

  componentDidMount() {
    const self = this;
    queryAll({ query: 'Kanye',
      })
      .then((results) => {
        console.log(results);
        self.setState({
          tracks: results,
        });
      });
  }

  handleCardPlay(track) {
    this.setState({
      currentTrack: track,
    });
  }

  handleSearch(value) {
    const self = this;
    queryAll({ query: value })
      .then((results) => {
        self.setState({
          tracks: results,
        });
      });
  }

  render() {
    return (
      <div>
          <AppBar className="appBar" >
            <Navigation type="horizontal" actions={[
              {
                label: 'Crunchy Tunes',
                raised: true,
                accent: true,
                icon: 'audiotrack',
              }]}
            />
          </AppBar>
          <Nav handleSearch = {this.handleSearch.bind(this)} />
          <SongPlayer track = {this.state.currentTrack} />
          <CardsContainer tracks = {this.state.tracks}
            handleCardPlay = {this.handleCardPlay.bind(this)}
          />
          }

      </div>
    );
  }
}

export default App;
