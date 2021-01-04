/* eslint-disable no-unused-vars */
import React from 'react';
import renderer from 'react-test-renderer';
import Home from '../../components/Home';

it('renders correctly', () => {
  const home = renderer.create(<Home />).toJSON();
  expect(home).toMatchSnapshot();
});