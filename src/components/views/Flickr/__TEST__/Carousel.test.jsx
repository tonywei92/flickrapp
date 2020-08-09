import React from 'react';
import renderer from 'react-test-renderer';
import Carousel from '../Carousel';

const responseMock = require('./flickrResponse.json');

test('Render correct carousel structure', () => {
  const component = renderer.create(
    <Carousel feeds={responseMock} loading={false} error={null} />
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
