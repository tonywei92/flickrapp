import React from 'react';
import renderer from 'react-test-renderer';
import SingleFeed from '../SingleFeed';

const responseMock = require('./flickrResponse.json');

test('Render correct single feed structure', () => {
  const component = renderer.create(<SingleFeed feed={responseMock[0]} />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
