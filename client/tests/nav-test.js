import React from 'react';
import Nav from '../nav.js';
import TestUtils from 'react-addons-test-utils';

describe('nav', () => {
  it('renders without problems', () => {
    const nav = TestUtils.renderIntoDocument(<Nav />);
    expect(nav).toBeDefined();
  });
});
