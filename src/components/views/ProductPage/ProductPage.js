import React from 'react';
import PropTypes from 'prop-types';
import styles from './ProductPage.module.scss';
import { useParams } from 'react-router-dom';

const ProductPage = ({ products }) => {
  const { productId } = useParams();
  const product = products.filter(prod => prod.id === productId)[0];
  const { name } = product;

  return <div className={styles.root}>This is ProductPage: {name}</div>;
};

ProductPage.propTypes = {
  products: PropTypes.array,
};

export default ProductPage;
