import React from 'react';
import Search from '../search.jsx'
import TestUtils from 'react-addons-test-utils';

describe('search', function() {
  it('renders without problems', function() {
    var search = TestUtils.renderIntoDocument(<Search/>);
    expect(search).toBeDefined();
  });
});