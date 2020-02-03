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
/*
describe('ProductPage', () => {
  it('renders without crashing', () => {
    //shallow(<ProductPage />);
  });
});
*/