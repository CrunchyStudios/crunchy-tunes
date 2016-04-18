import cardCreator from '../songCardCreator.js';

describe('card creator', () => {
  it('modifies a Spotify song object', () => {
    const input = {
      apiSource: 'Spotify',
      album: { images: [{ url: 'www.test.com' }] },
      id: 'wow123',
      artists: [{ name: 'rihanna' }],
      name: 'Work',
    };
    const result = cardCreator(input);
    expect(result.creator).toEqual(jasmine.any(String));
  });

  it('modifies a SoundCloud song object', () => {
    const input = {
      apiSource: 'SoundCloud',
      artwork_url: 'www.url.com',
      id: 'cool123',
      user: { username: 'drake' },
      title: 'Know Yourself',
    };
    const result = cardCreator(input);
    expect(result.creator).toEqual(jasmine.any(String));
  });

  it('modifies a YouTube song object', () => {
    const input = {
      apiSource: 'YouTube',
      snippet: { thumbnails: { high: { url: 'www.video.com' } },
            channelTitle: 'Queen',
            title: 'Bohemian Raphsody' },
      id: { videoId: 'qqqqqq' },
    };
    const result = cardCreator(input);
    expect(result.creator).toEqual(jasmine.any(String));
  });
});
