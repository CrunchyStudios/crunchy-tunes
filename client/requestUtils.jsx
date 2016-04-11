var $ = require("jquery");

var searchYouTube = () => {
  $.get('https://www.googleapis.com/youtube/v3/search', {
    part: 'snippet',
    key: 'AIzaSyDmx467d1QuKT6XYvFVk6wbYCy06mmyVlY',
    q: 'drake',
    maxResults: 5,
    type: 'video',
    videoEmbeddable: 'true'
  })
  .done(({items}) => {
    console.log(items);
    }
  )
  .fail(({responseJSON}) => {
    responseJSON.error.errors.forEach((err) =>
      console.error(err)
    )
  });
};


searchYouTube();




// var myHeaders = new Headers({
  	
//   		part: 'contentDetails',
// 	  	forUsername: 'OneDirectionVEVO',
// 	    key: 'AIzaSyDmx467d1QuKT6XYvFVk6wbYCy06mmyVlY'
	
// });

// var myInit = {  
// 				method: 'GET',
// 				part: 'contentDetails',
// 	  	forUsername: 'OneDirectionVEVO',
// 	    key: 'AIzaSyDmx467d1QuKT6XYvFVk6wbYCy06mmyVlY'

// 			};

// fetch('https://www.googleapis.com/youtube/v3/channels?', myInit)
// 	.then(function(response) {
// 		if (response.status >= 400) {
// 			console.log(response);
// 		}
// 		return response.json();
// 	})
// 	.then(function(data) {
// 		console.log(data);
// 	});
