import React from 'react';
import { shallow } from 'enzyme';
import IconSearch from './IconSearch';

it('expect to render IconSearch component', () => {
  expect(shallow(<IconSearch/>)).toMatchSnapshot();
});