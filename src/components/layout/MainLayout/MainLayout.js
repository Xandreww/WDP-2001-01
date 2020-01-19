import React from 'react';
import PropTypes from 'prop-types';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Compare from '../../features/Compare/CompareContainer';

const MainLayout = ({ children }) => (
  <div>
    <Header />
    <Compare />
    {children}
    <Footer />
  </div>
);

MainLayout.propTypes = {
  children: PropTypes.node,
};

export default MainLayout;
