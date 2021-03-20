import { getItems } from './SearchResult';
import axios from 'axios';

jest.mock("axios");

describe('SearchResult', ()=> {
  it('request API to get Items', () => {  
    
    axios.get.mockResolvedValue({ data: { item: {} } });
    getItems('apple iphone');
    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(axios.get).toHaveBeenCalledWith('/api/items?q=apple iphone');
    expect.assertions(2);

  });
});