import React from 'react';
import styles from './ProductListBar.module.scss';

const ProductListBar = () => (
  <div className={styles.root}>
    <div className='container'>
      <div className={`row + ${styles.row}`}>
        <div className={`col-4`}>Furniture</div>
        <div className={`col-4`}>Sort by: Price</div>
        <div className={`col-2`}>show 12</div>
        <div className={`col-2`}>icons</div>
      </div>
    </div>
  </div>
);

export default ProductListBar;
