import React from 'react';

import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons';
import Button from '../Button/Button';
import ProductBox from '../ProductBox/ProductBox';
import Timer from '../Timer/Timer';

import styles from './HotDealsProductBox.module.scss';

const HotDealsProductBox = ({
  id,
  name,
  image,
  stars,
  isFavorite,
  addToFav,
  price,
  oldPrice,
  closePromotionTime,
}) => {
  return (
    <div className={styles.root}>
      <ProductBox />
      <Button className={styles.addToCartBtn} variant='small'>
        <FontAwesomeIcon icon={faShoppingBasket}></FontAwesomeIcon> ADD TO CART
      </Button>
      <div className={styles.timer}>
        <Timer />
      </div>
    </div>
  );
};

HotDealsProductBox.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  image: PropTypes.string,
  stars: PropTypes.number,
  closePromotionTime: PropTypes.number,
  price: PropTypes.number,
  oldPrice: PropTypes.number,
  isFavorite: PropTypes.bool,
  addToFav: PropTypes.func,
};

export default HotDealsProductBox;
