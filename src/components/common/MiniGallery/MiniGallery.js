import React from 'react';
import PropTypes from 'prop-types';
import styles from './MiniGallery.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';

const MiniGallery = ({ products }) => {
  const photos = [];

  for (let i = 0; i < 7; i++) {
    photos.push(
      <img
        className={styles.miniGalleryImage}
        src={products[i].image}
        alt={products[i].name}
      />
    );
  }

  return (
    <div className={styles.root}>
      <div className={styles.photos}>
        <div className={styles.iconBackground}>
          <FontAwesomeIcon
            className={styles.icon}
            icon={faChevronLeft}
          ></FontAwesomeIcon>
          {photos}
          <div className={styles.iconBackground}>
            <FontAwesomeIcon
              className={styles.icon}
              icon={faChevronRight}
            ></FontAwesomeIcon>
          </div>
        </div>
      </div>
    </div>
  );
};

MiniGallery.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      // category: PropTypes.string,
      // price: PropTypes.number,
      // stars: PropTypes.number,
      // promo: PropTypes.string,
      // newFurniture: PropTypes.bool,
      // favourited: PropTypes.bool,
      // addedToCompare: PropTypes.bool,
      image: PropTypes.string,
    })
  ),
};

export default MiniGallery;
