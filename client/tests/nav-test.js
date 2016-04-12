import React from 'react';
import Nav from '../nav.js'
import TestUtils from 'react-addons-test-utils';

describe('nav', function() {
  it('renders without problems', function() {
    var nav = TestUtils.renderIntoDocument(<Nav/>);
    expect(nav).toBeDefined();
  });
});