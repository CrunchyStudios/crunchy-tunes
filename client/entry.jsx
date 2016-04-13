 'use strict';

import React from 'react';
import App from './app.jsx';
import { render } from 'react-dom';
// import searchYouTube from './requestYouTubeUtils.js'
// import searchSpotify from './requestSpotifyUtils.js'
// import searchSoundCloud from './requestSoundCloudUtils.js'
// import cardCreator from './songCardCreator.js';
import queryAll from './queryAll.js'

render (
  <App />,
  document.getElementById('app')
);