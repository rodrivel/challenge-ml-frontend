import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SearchBar from './SearchBar';
import { renderWithRouter } from '../../helpers/renderWithRouter';

it('user search text is echoed', () => {
  const search = 'Apple Iphone X';
  renderWithRouter(SearchBar);
  userEvent.type(document.querySelector('input'), search);
  expect(screen.getByPlaceholderText('Nunca dejes de buscar').value).toBe(search);
});
