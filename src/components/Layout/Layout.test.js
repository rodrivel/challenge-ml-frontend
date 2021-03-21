import React from 'react';
import { shallow } from 'enzyme';
import Layout from './Layout';

it('expect to render Layout component', () => {
  expect(shallow(<Layout />)).toMatchSnapshot();
});
