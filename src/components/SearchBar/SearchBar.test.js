import { screen } from '@testing-library/react'
import SearchBar from './SearchBar';
import { renderWithRouter } from '../../helpers/renderWithRouter';
import userEvent from '@testing-library/user-event';


it('user search text is echoed', () => {
  const search = 'Apple Iphone X'
  renderWithRouter(SearchBar);
  userEvent.type(document.querySelector('input'), search);
  expect(screen.getByPlaceholderText('Nunca dejes de buscar').value).toBe(search);
});
