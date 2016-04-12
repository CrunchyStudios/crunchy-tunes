import React from 'react';
import SongPlayer from '../songPlayer.js';
import TestUtils from 'react-addons-test-utils';

describe('SongPlayer', function() {
  it('renders without problems', function() {
    var songPlayer = TestUtils.renderIntoDocument(<SongPlayer/>);
    expect(songPlayer).toBeDefined();
  });
});