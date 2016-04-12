// test for YouTube API
import React from 'react';
import TestUtils from 'react-addons-test-utils'; //Alternately could use the DOM API
import searchYouTube from '../requestYouTubeUtils.jsx';

describe('YouTube search API request', function () {
  it('should return array of objects given a string query input', function () {
    var query = 'kanye west';
    var searchResults = searchYouTube({query: query}, function(results) {
    	return results;
    });
    expect(searchResults).toContain({});
  });
});