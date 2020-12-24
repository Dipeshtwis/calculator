import React from 'react';
import renderer from 'react-test-renderer';
import Quote from '../../components/Quote';

it('renders correctly', () => {
  const quote = renderer.create(<Quote />).toJSON();
  expect(quote).toMatchSnapshot();
});