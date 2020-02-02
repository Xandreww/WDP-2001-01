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
    <div className={styles.icons}>
      <button
        className={selectedProduct.isFavorite ? styles.linkActive : null}
        onClick={e => favHandler(e)}
      >
        <FontAwesomeIcon
          className={styles.icon}
          icon={faHeart}
          fixedWidth
          border
        ></FontAwesomeIcon>
        <span>
          <FontAwesomeIcon
            className={styles.caretLeft}
            icon={faCaretLeft}
          ></FontAwesomeIcon>
          Add to favorities
        </span>
      </button>
      <button
        className={selectedProduct.toCompare ? styles.linkActive : null}
        onClick={e => compareHandler(e)}
      >
        <FontAwesomeIcon
          className={styles.icon}
          icon={faExchangeAlt}
          fixedWidth
          border
        ></FontAwesomeIcon>
        <span>
          <FontAwesomeIcon
            className={styles.caretLeft}
            icon={faCaretLeft}
          ></FontAwesomeIcon>
          Add to compare
        </span>
      </button>
      <button>
        <FontAwesomeIcon
          className={styles.icon}
          icon={faEye}
          fixedWidth
          border
        ></FontAwesomeIcon>
        <span>
          <FontAwesomeIcon
            className={styles.caretLeft}
            icon={faCaretLeft}
          ></FontAwesomeIcon>
          View details
        </span>
      </button>
      <button className={styles.linkActive}>
        <FontAwesomeIcon
          className={styles.icon}
          icon={faShoppingBag}
          fixedWidth
          border
        ></FontAwesomeIcon>
        <span>
          <FontAwesomeIcon
            className={styles.caretLeft}
            icon={faCaretLeft}
          ></FontAwesomeIcon>
          Add to cart
        </span>
      </button>
    </div>
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
