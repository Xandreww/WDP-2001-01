import React from 'react';
import { shallow } from 'enzyme';
import ProductBox from './ProductBox';

describe('Component ProductBox', () => {
  it('should render without crashing', () => {
    const component = shallow(<ProductBox id='aenean-ru-bristique-1' />);
    expect(component).toBeTruthy();
  });
  it('should start function with properly props', () => {
    const mockOnFavorite = jest.fn();
    const component = shallow(
      <ProductBox addToFav={mockOnFavorite} id='aenean-ru-bristique-1' />
    );
    component.find('[data-test="button"]').simulate('click', {
      preventDefault: () => {},
    });
    expect(mockOnFavorite).toHaveBeenCalledTimes(1);
  });
});
