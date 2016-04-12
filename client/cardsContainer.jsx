import React from 'react';
import Button from 'react-toolbox/lib/button';
import { Card, CardMedia, CardTitle, CardText, CardActions } from 'react-toolbox/lib/card';


var CardsContainer = ({tracks, handleCardPlay}) => {

  var cards = tracks.map((track) =>
    <Card key={track.id} className="card" style={{width: '300px'}}>
        <CardTitle
          avatar="http://www.iconarchive.com/download/i98446/dakirby309/simply-styled/Spotify.ico"
          title={track.artist}
          // subtitle="Subtitle here"
        />
        <CardMedia
          aspectRatio="wide"
          image={track.art}
        />        
        
        <CardText>
        Any Description We Want!
        </CardText>

        <CardActions>
          <Button label="Play" onClick={() => handleCardPlay(track)}/>
          <Button label="Add To Library" />
        </CardActions>
      </Card>
  );
  
  return (
    <div className="cardsContainer">
      {cards}    
    </div>
  );

  
};

export default CardsContainer;