import React from 'react';
import PropTypes from 'prop-types';
import StarsRating from '../../common/StarsRating/StarsRating';
import styles from './GalleryBox.module.scss';

const GalleryBox = ({ name, image, price, oldPrice, id, stars }) => {
  return (
    <div className={styles.root}>
      <img src={image} alt={name} />
      <div className={styles.nameBox}>
        <h3 className={styles.name}>{name}</h3>
        <StarsRating {...stars} />
      </div>
      <div className={styles.priceBox}>
        <div className={styles.price}>${price}</div>
        <div className={styles.priceOld}>{oldPrice}</div>
      </div>
    </div>
  );
};

GalleryBox.propTypes = {
  name: PropTypes.string,
  id: PropTypes.string,
  price: PropTypes.number,
  oldPrice: PropTypes.number,
  stars: PropTypes.func,
  image: PropTypes.any,
};

export default GalleryBox;
