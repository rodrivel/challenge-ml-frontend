import React from 'react';
import { shallow } from 'enzyme';
import ErrorFallback from './ErrorFallback';

it('expect to render ErrorFallback component', () => {
  expect(shallow(<ErrorFallback/>)).toMatchSnapshot();
});