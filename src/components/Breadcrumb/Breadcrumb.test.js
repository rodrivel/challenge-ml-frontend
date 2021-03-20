import React from 'react';
import { shallow } from 'enzyme';
import Breadcrumb from './Breadcrumb';

it('expect to render Breadcrumb component', () => {
  const mockCategories = [
    'Celulares y Teléfonos',
    'Smartwatches y Accesorios',
    'Smartwatch',    
  ]
  expect(shallow(<Breadcrumb categories={ mockCategories } />)).toMatchSnapshot();
});