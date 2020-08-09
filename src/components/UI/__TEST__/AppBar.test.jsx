import React from 'react';
import renderer from 'react-test-renderer';
import AppBar from '../AppBar';

test('Render correct carousel structure', () => {
  const buttons = [
    <button type="button" key="button1">
      button 1
    </button>,
    <button type="button" key="button2">
      button 2
    </button>,
  ];
  let component = renderer.create(
    <AppBar
      title="test 1"
      buttons={buttons}
      searchInputValue="test input value"
      onSearchInputChanged={() => {}}
      onSearchSubmit={() => {}}
      onMenuClick={() => {}}
    />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  component = renderer.create(
    <AppBar
      title="test 1"
      buttons={buttons}
      onSearchInputChanged={() => {}}
      onSearchSubmit={() => {}}
      onMenuClick={() => {}}
    />
  );

  tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
