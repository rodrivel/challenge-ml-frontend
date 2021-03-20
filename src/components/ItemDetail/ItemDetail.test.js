import { getItemFromAPI } from './ItemDetail';
import axios from 'axios';

jest.mock("axios");

describe('ItemDetail', ()=> {
  it('fetches item data from API', () => {  
    
    axios.get.mockResolvedValue({ data: { item: {} } });
    getItemFromAPI('MLA910734580');
     
    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(axios.get).toHaveBeenCalledWith('/api/items/MLA910734580');
    expect.assertions(2);
  
  });
})
