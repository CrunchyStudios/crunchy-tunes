 'use strict';

import React from 'react';
import App from './app.jsx';
import { render } from 'react-dom';
import searchYouTube from './requestYouTubeUtils.jsx'
import searchSpotify from './requestSpotifyUtils.jsx'
import searchSoundCloud from './requestSoundCloudUtils.jsx'
import queryAll from './queryAll.jsx'

render (
  <App />,
  document.getElementById('app')
);