import React from 'react';
import { shallow } from 'enzyme';
import Homepage from './Homepage';
import Feedback from '../../features/Feedback/Feedback';

describe('Homepage', () => {
  it('renders without crashing', () => {
    shallow(<Homepage />);
  });

  it('renders Feedback on Homepage', () => {
    shallow(<Feedback />);
  });
});
