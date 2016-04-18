var React = require('react');
var TestUtils = require('react-addons-test-utils'); //Alternately could use the DOM API

import App from '../app.jsx';

describe('app', function () {
  it('renders without problems', function () {
    var app = TestUtils.renderIntoDocument(<App />);
    expect(app).toBeDefined();
  });
});