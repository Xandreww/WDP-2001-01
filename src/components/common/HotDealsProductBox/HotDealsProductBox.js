import React from 'react';

import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons';
import Button from '../Button/Button';

import styles from './HotDealsProductBox.module.scss';
import Timer from '../Timer/Timer';

const HotDealsProductBox = ({ name, image }) => {
  return (
    <div className={styles.root}>
      <div className={styles.photo}>
        <img src={image} alt={name} />
        <Button className={styles.addToCartBtn} variant='small'>
          <FontAwesomeIcon icon={faShoppingBasket}></FontAwesomeIcon> ADD TO CART
        </Button>
        <div className={styles.photo}>
          <Timer />
        </div>
      </div>
    </div>
  );
};

HotDealsProductBox.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
};

export default HotDealsProductBox;
