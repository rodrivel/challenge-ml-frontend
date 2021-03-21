import axios from 'axios';
import { imageSkeletonHeight, getItemFromAPI } from './ItemDetail';

jest.mock('axios');

describe('ItemDetail', () => {
  it('fetches item data from API', () => {
    axios.get.mockResolvedValue({ data: { item: {} } });
    getItemFromAPI('MLA910734580');
    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(axios.get).toHaveBeenCalledWith('/api/items/MLA910734580');
    expect.assertions(2);
  });

  it('returns 200px as default value when screen size does not exist', () => {
    const height = imageSkeletonHeight('xxxxxxxxl');
    expect(height).toBe('200px');
  });

  it('returns correct value when screen size does not exist', () => {
    const height = imageSkeletonHeight('xl');
    expect(height).toBe('680px');
  });
});
