import React from 'react';
import Button from 'react-toolbox/lib/button';
import { Card, CardMedia, CardTitle, CardText, CardActions } from 'react-toolbox/lib/card';


const CardsContainer = ({ tracks, handleCardPlay }) => {
  let cards = tracks.map((track) =>
    <Card onClick={() => handleCardPlay(track)}
      key={track.contentId}
      className="card"
      style={{ width: '250px', height: '370px' }}
    >
        <CardTitle
          avatar= { 
            track.apiSource === 'Spotify' ? 'http://www.iconarchive.com/download/i98446/dakirby309/simply-styled/Spotify.ico' :
              track.apiSource === 'SoundCloud' ? 'https://c1.staticflickr.com/9/8082/8292777643_65090144e9.jpg' :
                'https://cdn0.iconfinder.com/data/icons/social-networks-and-media-flat-icons/136/Social_Media_Socialmedia_network_share_socialnetwork_network-30-512.png'
          }
          title={track.artist}
        />
        <CardMedia
          aspectRatio="wide"
          image={track.imagePath}
        />
        <CardText>
        {track.songTitle}
        </CardText>
      </Card>
  );
  return (
    <div className="cardsContainer">
      {cards}
    </div>
  );
};

export default CardsContainer;
