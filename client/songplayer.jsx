import React from 'react';

const SongPlayer = ({ track }) => {
  let embed;

  switch (track.apiSource) {
    case 'Spotify':
      embed = <iframe src={`https://embed.spotify.com/?uri=spotify%3Atrack%3A${track.contentId}`} width="500" height="80" frameBorder="0" allowTransparency="true"></iframe>;
      break;
    case 'SoundCloud':
      embed = <iframe width="500" height="80" scrolling="no" frameBorder="no" src={`https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/${track.contentId}&color=orange_white`}></iframe>;

      break;
    case 'YouTube':
      embed = <iframe width="560" height="315" src={`https://www.youtube.com/embed/${track.contentId}`} frameBorder="0" allowFullScreen></iframe>;
      break;
    case 'test':
      embed = <iframe src="https://embed.spotify.com/?uri=spotify%3Atrack%3A0wcbltC75nBbE4eFPOynEx" width="300" height="80" frameBorder="0" allowTransparency="true"></iframe>;
      break;
    default:
      console.log('uh oh');
  }

  return (
    <div className="songPlayer">
      <div>Current Track: {embed}</div>
    </div>
  );
};

export default SongPlayer;
