import React from 'react';
import { shallow } from 'enzyme';
import ListItem from './ListItem';

it('expect to render ListItem component', () => {
  const mockItemData = {
    id: 'MLAXXXXXXX',
    title: 'lorem ipsum',
  };
  expect(shallow(<ListItem itemData={mockItemData} />)).toMatchSnapshot();
});
