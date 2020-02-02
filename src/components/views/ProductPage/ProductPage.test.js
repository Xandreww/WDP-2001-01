import React from 'react';
import { render } from 'enzyme';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import ErrorNotFound from '../ErrorNotFound/ErrorNotFound';

test('redirects to page not found', () => {
  const route = '/not-found';
  const history = createMemoryHistory({ initialEntries: [route] });
  render(
    <Router history={history}>
      <ErrorNotFound to={route} />
    </Router>
  );
  expect(history.location.pathname).toBe('/not-found');
});

/*import React from 'react';
import { shallow } from 'enzyme';
import ProductPage from './ProductPage';

describe('Component ProductPage', () => {
  it('renders without crashing', () => {
    const component = shallow(<ProductPage />);
    expect(component).toBeTruthy();
  });
});
*/
