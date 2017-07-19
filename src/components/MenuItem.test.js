import React from 'react';
import { shallow } from 'enzyme';
import MenuItem from './MenuItem';

jest.dontMock('./MenuItem');

const menuItem = {
  calories: 230,
  calories_from_fat: 80,
  carbs: 26,
  cholestrol: 30,
  dietary_fiber: 1,
  fat: 8,
  name: 'Hamburger',
  protein: 11,
  saturated_fat: 3,
  sodium: 380,
  sugars: 6,
  trans_fat: 0.5
};

describe('<MenuItem />', () => {
  it('renders', () => {
    shallow(<MenuItem menuItem={menuItem} />);
  });
});
