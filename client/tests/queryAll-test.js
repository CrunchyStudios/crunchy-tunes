// test for SoundCloud API
import React from 'react';
import TestUtils from 'react-addons-test-utils'; //Alternately could use the DOM API
import queryAll from '../queryAll.js'



describe('Query all APIs', function () {
    var returned;
    var query = {query: 'kanye west'};
    // due to async get request, need to pass in special Jasmine callback done
    beforeEach(function(done) {
        queryAll(query)
            .then(function(arrayOfSongs){
                // set return to the array of song results
                returned = arrayOfSongs;
                // special callback invocation
                done();
            })
            .catch(function(err){
                throw err;
                // special callback invocation
                done();
            });
    });
  it('should return array of objects formatted as cards', function () {
    expect(returned[0]['creator']).toEqual(jasmine.any(String));
  });
});