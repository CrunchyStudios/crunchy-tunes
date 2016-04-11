 'use strict';

import React from 'react';
import App from './app.jsx';
import { render } from 'react-dom';
import searchYouTubeVideos from './requestYouTubeUtils.jsx'
import searchSpotifyVideos from './requestSpotifyUtils.jsx'


render (
  <App />,
  document.getElementById('app')
);