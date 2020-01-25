import React from 'react';

import PropTypes from 'prop-types';

import ProductBox from '../ProductBox/ProductBox';
import Timer from '../Timer/Timer';

import styles from './HotDealsProductBox.module.scss';

const HotDealsProductBox = ({ hotDeals }) => {
  return (
    <div className={styles.root}>
      <ProductBox {...hotDeals} />
      <div className={styles.timer}>
        <Timer />
      </div>
    </div>
  );
};

HotDealsProductBox.propTypes = {
  hotDeals: PropTypes.array,
};

export default HotDealsProductBox;
