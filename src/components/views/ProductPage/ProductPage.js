import React from 'react';
import PropTypes from 'prop-types';
import styles from './ProductPage.module.scss';
import { useParams, Redirect } from 'react-router-dom';

const ProductPage = ({ products }) => {
  const { productId } = useParams();
  const product = products.filter(prod => prod.id === productId)[0];

  if (!product) {
    return <Redirect to='/not-found' />;
  } else {
    const { name, category } = product;
    return (
      <div className={styles.root}>
        <p>Category: {category} </p>
        <p>This is ProductPage: {name}</p>
      </div>
    );
  }
};

ProductPage.propTypes = {
  products: PropTypes.array,
};

export default ProductPage;
