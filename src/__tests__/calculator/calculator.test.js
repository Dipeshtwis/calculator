/* eslint-disable no-unused-vars */
import React from 'react';
import renderer from 'react-test-renderer';
import App from '../../components/App';

it('renders correctly', () => {
  const app = renderer.create(<App />).toJSON();
  expect(app).toMatchSnapshot();
});