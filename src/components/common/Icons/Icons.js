import React from 'react';
import styles from './Icons.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHeart,
  faExchangeAlt,
  faEye,
  faShoppingBag,
  faCaretLeft,
} from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';

const Icons = ({
  removeFromCompare,
  addToCompare,
  addToFav,
  removeFromFav,
  selectedProduct,
  products,
}) => {
  const favHandler = event => {
    event.preventDefault();
    selectedProduct.isFavorite
      ? removeFromFav(selectedProduct.id)
      : addToFav(selectedProduct.id);
  };
  const compareHandler = event => {
    event.preventDefault();
    const prodToCompare = products.filter(product => product.toCompare).length;
    if (prodToCompare <= 3) {
      selectedProduct.toCompare
        ? removeFromCompare(selectedProduct.id)
        : addToCompare(selectedProduct.id);
    } else {
      alert('You can compare only four products');
    }
  };

  return (
    <ul className={styles.icons}>
      <a
        href='#'
        className={selectedProduct.isFavorite && styles.linkActive}
        onClick={e => favHandler(e)}
      >
        <li>
          <FontAwesomeIcon
            className={styles.icon}
            icon={faHeart}
            fixedWidth
            border
          ></FontAwesomeIcon>
        </li>
        <span>
          <FontAwesomeIcon
            className={styles.caretLeft}
            icon={faCaretLeft}
          ></FontAwesomeIcon>
          Add to favorities
        </span>
      </a>
      <a
        href='#'
        className={selectedProduct.toCompare && styles.linkActive}
        onClick={e => compareHandler(e)}
      >
        <li>
          <FontAwesomeIcon
            className={styles.icon}
            icon={faExchangeAlt}
            fixedWidth
            border
          ></FontAwesomeIcon>
        </li>
        <span>
          <FontAwesomeIcon
            className={styles.caretLeft}
            icon={faCaretLeft}
          ></FontAwesomeIcon>
          Add to compare
        </span>
      </a>
      <a href='#'>
        <li>
          <FontAwesomeIcon
            className={styles.icon}
            icon={faEye}
            fixedWidth
            border
          ></FontAwesomeIcon>
        </li>
        <span>
          <FontAwesomeIcon
            className={styles.caretLeft}
            icon={faCaretLeft}
          ></FontAwesomeIcon>
          View details
        </span>
      </a>
      <a href='#' className={styles.linkActive}>
        <li>
          <FontAwesomeIcon
            className={styles.icon}
            icon={faShoppingBag}
            fixedWidth
            border
          ></FontAwesomeIcon>
        </li>
        <span>
          <FontAwesomeIcon
            className={styles.caretLeft}
            icon={faCaretLeft}
          ></FontAwesomeIcon>
          Add to cart
        </span>
      </a>
    </ul>
  );
};

Icons.propTypes = {
  addToCompare: PropTypes.func,
  removeFromCompare: PropTypes.func,
  addToFav: PropTypes.func,
  removeFromFav: PropTypes.func,
  selectedProduct: PropTypes.object,
  products: PropTypes.array,
};

export default Icons;
