// combines array input (with multiple nested arrays) and returns single array with evenly mixed elements

var remixArray = function(arrayOfResults) {

	// array to return combined results
	var remix = [];
	// increment index as long as input array has sub-arrays
	for (var i = 0; arrayOfResults.length !== 0; i++) {
		// variable representing index of sub-array, to be incremented below
	    var j = 0;
	    while (j < arrayOfResults.length) {
	    	// if you've pushed all results in sub-array, remove the sub-array
	        if (i >= arrayOfResults[j].length) {
	            arrayOfResults.splice(j, 1);
	        } else {
	        	// push each element of each sub-array
	            remix.push(arrayOfResults[j][i])
	            j += 1;
	        }
	    }
	}

	return remix;
};

export default remixArray;