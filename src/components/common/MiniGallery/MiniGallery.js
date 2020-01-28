import React from 'react';
import PropTypes from 'prop-types';
import styles from './MiniGallery.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';

const MiniGallery = ({ products }) => {
  const numberOfProducts = products.length;

  const countProductsToDisplay = () => {
    if (numberOfProducts > 0) {
      if (numberOfProducts >= 6) {
        return 6;
      } else {
        return numberOfProducts;
      }
    }
  };

  const productsToDisplay = countProductsToDisplay();

  return (
    <div className={styles.root}>
      <div className={styles.photoContainer}>
        <div className={styles.iconBackground}>
          <FontAwesomeIcon
            className={styles.icon}
            icon={faChevronLeft}
          ></FontAwesomeIcon>
        </div>
        <div className={styles.photos}>
          {products &&
            products
              .filter((product, index) => index <= productsToDisplay)
              .map(product => (
                <img
                  className={styles.miniGalleryImage}
                  src={product.image}
                  alt={product.name}
                  key={product.name}
                />
              ))}
        </div>
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
