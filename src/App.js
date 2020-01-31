import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';

import './styles/bootstrap.scss';
import './styles/global.scss';

import MainLayout from './components/layout/MainLayout/MainLayoutContainer';
import Homepage from './components/views/Homepage/Homepage';
import ProductList from './components/views/ProductList/ProductList';
import ProductPageContainer from './components/views/ProductPage/ProductPageContainer';
import ErrorNotFound from './components/views/ErrorNotFound/ErrorNotFound';
import BlogPage from './components/views/BlogPage/BlogPageContainer';

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <MainLayout>
        <Switch>
          <Route exact path={'/'} component={Homepage} />
          <Route exact path={'/shop/:categoryId'} component={ProductList} />
          <Route
            exact
            path={'/product/:productId'}
            component={ProductPageContainer}
            ignoreScrollBehavior
          />
          <Route exact path={'/blog/:blogId'} component={BlogPage} />
          <Route component={ErrorNotFound} />
        </Switch>
      </MainLayout>
    </BrowserRouter>
  </Provider>
);

export default App;
