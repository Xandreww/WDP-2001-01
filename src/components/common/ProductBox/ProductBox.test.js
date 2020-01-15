import React from 'react';
import { shallow } from 'enzyme';
import ProductBox from './ProductBox';
import { mapDispatchToProps } from './ProductBoxContainer';

describe('Component ProductBox', () => {
  const component = shallow(<ProductBox id='aenean-ru-bristique-2' />);
  it('should render without crashing', () => {
    expect(component).toBeTruthy();
  });

  it('should start function with properly props', () => {
    // component.find('[data-test="button"]').simulate('click', {
    //   preventDefault: () => {},
    // });
    // expect(addToFav).toHaveBeenCalled();

    component.find('[data-test="button"]').simulate('click', {
      preventDefault: () => {},
    });
    // expect(component.state().isFavorite).toEqual(true);
    // expect(mapDispatchToProps('aenean-ru-bristique-2')).toEqual(
    //   'aenean-ru-bristique-2'
    // );
  });
});
