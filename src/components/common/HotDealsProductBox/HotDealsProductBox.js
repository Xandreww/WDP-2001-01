import React from 'react';

import PropTypes from 'prop-types';

import ProductBox from '../ProductBox/ProductBox';
import Timer from '../Timer/Timer';

import styles from './HotDealsProductBox.module.scss';

const HotDealsProductBox = ({ hotDealsProductBox }) => {
  return (
    <div className={styles.root}>
      <ProductBox {...hotDealsProductBox} />
      <div className={styles.timer}>
        <Timer />
      </div>
    </div>
  );
};

HotDealsProductBox.propTypes = {
  hotDealsProductBox: PropTypes.object,
};

export default HotDealsProductBox;
