import React from 'react';
import styles from './ProductList.module.scss';
import ProductListBar from '../../layout/ProductListBar/ProductListBar';

const ProductList = () => {
  return (
    <div className={styles.root}>
      <ProductListBar />
      <div className={styles.content}>Content</div>
    </div>
  );
};

export default ProductList;
