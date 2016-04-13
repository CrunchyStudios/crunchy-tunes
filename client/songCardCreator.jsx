var imagePath = {
	Spotify: 'album[images[0]][url]',
	SoundCloud: '.artwork_url',
	YouTube: '.snippet.thumbnails.high.url'
}

var contentId = {
	Spotify: '',
	SoundCloud: ,
	YouTube: 'https://www.youtube.com/embed/' + 
}

var creator = {
	Spotify: ,
	SoundCloud: ,
	YouTube: 
}

var songTitle = {
	Spotify: ,
	SoundCloud: ,
	YouTube: 
}

var source = {
	Spotify: ,
	SoundCloud: ,
	YouTube: 
}

// function
var cardCreator = function (object) {

	// input is an object with apiSource defined

	// we check apiSource and use that as key
	var key = object.apiSource;
	// populate new object, returning values based on apiSource
	var newCard = {
		imagePath: object[imagePath[key]]
	}
	// return new object
	return newCard

	
}

