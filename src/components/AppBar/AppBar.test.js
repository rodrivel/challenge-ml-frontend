import React from 'react';
import { render, root } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { act } from 'react-dom/test-utils';
import { MemoryRouter } from 'react-router-dom';
import { shallow } from 'enzyme';
import AppBar from './AppBar';

it('navigates home when you click the logo', () => {
  render(
    <MemoryRouter initialEntries={['/items/MLA864888617']}>
      <AppBar />
    </MemoryRouter>,
    root,
  );

  act(() => {
    const homeLink = document.querySelector('#logo-link');
    homeLink.dispatchEvent(new MouseEvent('click', { bubbles: true }));
  });
  expect(document.body.textContent).toBe('');
});

it('expect to render AppBar component', () => {
  expect(shallow(<AppBar />)).toMatchSnapshot();
});
