import React from 'react';
// import PropTypes from 'prop-types';

import styles from './Homepage.module.scss';

import FeatureBoxes from '../../features/FeatureBoxes/FeatureBoxes';
import NewFurniture from '../../features/NewFurniture/NewFurnitureContainer';
import SaleContainer from '../../features/Sale/SaleContainer';

const Homepage = () => (
  <div className={styles.root}>
    <FeatureBoxes />
    <SaleContainer />
    <NewFurniture />
  </div>
);

// Homepage.propTypes = {};

export default Homepage;
