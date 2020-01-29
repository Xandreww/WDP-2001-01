import React from 'react';
import styles from './ProductList.module.scss';
import ProductListBarContainer from '../../layout/ProductListBar/ProductListBarContainer';

const ProductList = () => {
  return (
    <div className={styles.root}>
      <ProductListBarContainer />
      <div className={styles.content}>Content</div>
    </div>
  );
};

export default ProductList;
