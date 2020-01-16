import React from 'react';
import { shallow } from 'enzyme';
import Feedback from './Feedback';

describe('Component NewFurniture', () => {
  it('should render without crashing', () => {
    const component = shallow(<Feedback />);
    expect(component).toBeTruthy();
  });
});
