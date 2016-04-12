import React from 'react';

var SongPlayer = ({track}) => {
  return (
    <div>
      <div>Current Track: {track ? track.embeddedUrl : null}</div>
    </div>
  );

};

export default SongPlayer;