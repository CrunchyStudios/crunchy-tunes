import React from 'react';
import TestUtils from 'react-addons-test-utils';
import cardCreator from '../songCardCreator.js'

describe('card creator', function() {
  it('modifies a Spotify song object', function() {
    var input = {
    	apiSource: 'Spotify',
    	album: {images:[{url: 'www.test.com'}]},
		id: 'wow123',
		artists: [{name: 'rihanna'}],
		name: 'Work'
    }
    var result = cardCreator(input)
    expect(result.creator).toEqual(jasmine.any(String));
  });

  it('modifies a SoundCloud song object', function() {
    var input = {
    	apiSource: 'SoundCloud',
    	artwork_url: 'www.url.com',
		id: 'cool123',
		user: {username: 'drake'},
		title: 'Know Yourself'
    }
    var result = cardCreator(input)
    expect(result.creator).toEqual(jasmine.any(String));
  });

  it('modifies a YouTube song object', function() {
    var input = {
    	apiSource: 'YouTube',
    	snippet: {thumbnails:{high: {url: 'www.video.com'}},
    				channelTitle: 'Queen',
    				title: 'Bohemian Raphsody'},
		id: {videoId: 'qqqqqq'}
    }
    var result = cardCreator(input)
    expect(result.creator).toEqual(jasmine.any(String));
  });

});