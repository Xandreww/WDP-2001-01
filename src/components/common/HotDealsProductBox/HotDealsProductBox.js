import React from 'react';

import PropTypes from 'prop-types';

import ProductBox from '../ProductBox/ProductBoxContainer';
import Timer from '../Timer/Timer';

import styles from './HotDealsProductBox.module.scss';

const HotDealsProductBox = ({ products }) => {
  // console.log('products props:', products);
  return (
    <div className={styles.root}>
      <ProductBox {...products} />
      <div className={styles.timer}>
        <Timer />
      </div>
    </div>
  );
};

HotDealsProductBox.propTypes = {
  products: PropTypes.object,
};

export default HotDealsProductBox;
