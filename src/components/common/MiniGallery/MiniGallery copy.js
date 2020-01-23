import React from 'react';
import PropTypes from 'prop-types';
import styles from './MiniGallery.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';

const MiniGallery = ({ products }) => {
  const photos = [];
  const numberOfProducts = products.length;

  if (numberOfProducts > 0) {
    const productsToDisplay = () => {
      if (numberOfProducts >= 6) {
        return 6;
      } else {
        return numberOfProducts;
      }
    };

    for (let i = 0; i <= productsToDisplay(); i++) {
      photos &&
        photos.push(
          <img
            className={styles.miniGalleryImage}
            src={products[i].image}
            alt={products[i].name}
            key={products[i].name}
          />
        );
    }
  }

  return (
    <div className={styles.root}>
      <div className={styles.photoContainer}>
        <div className={styles.iconBackground}>
          <FontAwesomeIcon
            className={styles.icon}
            icon={faChevronLeft}
          ></FontAwesomeIcon>
        </div>

        <div className={styles.photos}>{photos}</div>

        <div className={styles.iconBackground}>
          <FontAwesomeIcon
            className={styles.icon}
            icon={faChevronRight}
          ></FontAwesomeIcon>
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
      image: PropTypes.string,
    })
  ),
};

export default MiniGallery;
