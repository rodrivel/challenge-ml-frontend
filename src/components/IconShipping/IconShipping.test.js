import React from 'react';
import { shallow } from 'enzyme';
import IconShipping from './IconShipping';

it('expect to render IconShipping component', () => {
  expect(shallow(<IconShipping/>)).toMatchSnapshot();
});