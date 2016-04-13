var cardCreator = (object) => {
	
	var key = object.apiSource;

	if (key === 'Spotify') {
		return  {
			imagePath: object.album.images[0].url,
			contentId: object.id,
			creator: object.artists[0].name,
			songTitle: object.name,
			apiSource: object.apiSource
		}
	}
	
	if (key === 'SoundCloud') {
		return {
			imagePath: object.artwork_url,
			contentId: object.id,
			creator: object.user.username,
			songTitle: object.title,
			apiSource: object.apiSource
		}
	}

	if (key === 'YouTube') {
		return {
			imagePath: object.snippet.thumbnails.high.url,
			contentId: object.id.videoId,
			creator: object.snippet.channelTitle,
			songTitle: object.snippet.title,
			apiSource: object.apiSource
		}
	}

}

export default cardCreator;