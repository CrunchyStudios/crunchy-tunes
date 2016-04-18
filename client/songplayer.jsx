import React from 'react';

const SongPlayer = ({ track }) => {
  let embed;

  switch (track.apiSource) {
    case 'Spotify':
      embed = <iframe src={`https://embed.spotify.com/?uri=spotify%3Atrack%3A${track.contentId}`} width="300" height="80" frameBorder="0" allowTransparency="true"></iframe>;
      break;
    case 'SoundCloud':
      embed = <iframe width="300" height="80" scrolling="no" frameBorder="no" src={`https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/${track.contendId}0&amp;auto_play=true&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true`}></iframe>;
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
    <div>
      <div>Current Track: {embed}

      </div>
    </div>
  );
};

export default SongPlayer;