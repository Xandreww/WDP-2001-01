import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import styles from './ProductBox.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExchangeAlt, faShoppingBasket } from '@fortawesome/free-solid-svg-icons';
import { faEye, faStar as faHeart } from '@fortawesome/free-regular-svg-icons';

import Button from '../Button/Button';
import StarsRating from '../StarsRating/StarsRating';

const ProductBox = ({
  name,
  id,
  price,
  oldPrice,
  promo,
  stars,
  isFavorite,
  addToFav,
  removeFromFav,
  toCompare,
  removeFromCompare,
  addToCompare,
  products,
  image,
  changeRating,
  rated,
}) => {
  const favHandler = (event, id) => {
    event.preventDefault();
    isFavorite ? removeFromFav(id) : addToFav(id);
  };

  const compareHandler = (event, id) => {
    event.preventDefault();
    const prodToCompare = products.filter(product => product.toCompare).length;
    if (prodToCompare <= 3) {
      toCompare ? removeFromCompare(id) : addToCompare(id);
    } else {
      alert('You can compare only four products');
    }
  };

  return (
    <div className={styles.root}>
      <div className={styles.photo}>
        <Link to={`${process.env.PUBLIC_URL}/product/${id}`}>
          <img className={styles.furniture} src={image} alt={name} />
        </Link>
        {promo && <div className={styles.sale}>{promo}</div>}
        <div className={styles.buttons}>
          <Button variant='small'>Quick View</Button>
          <Button variant='small'>
            <FontAwesomeIcon icon={faShoppingBasket}></FontAwesomeIcon> ADD TO CART
          </Button>
        </div>
      </div>
      <div className={styles.content}>
        <h5>{name}</h5>
        <StarsRating stars={stars} rated={rated} changeRating={changeRating} id={id} />
      </div>
      <div className={styles.line}></div>
      <div className={styles.actions}>
        <div className={styles.outlines}>
          <Button variant={'outline'}>
            <FontAwesomeIcon icon={faEye}>Favorite</FontAwesomeIcon>
          </Button>
          <Button
            data-test='button'
            onClick={e => favHandler(e, id)}
            variant={isFavorite ? 'outline--checked' : 'outline'}
          >
            <FontAwesomeIcon icon={faHeart}>Favorite</FontAwesomeIcon>
          </Button>
          <Button
            onClick={e => compareHandler(e, id)}
            variant={toCompare ? 'outline--checked' : 'outline'}
          >
            <FontAwesomeIcon icon={faExchangeAlt}>Add to compare</FontAwesomeIcon>
          </Button>
        </div>
        {oldPrice && (
          <div className={styles.price}>
            <span className={styles.oldPrice}>$ {oldPrice}</span>
          </div>
        )}
        <div className={styles.price}>
          <Button noHover variant='small'>
            $ {price}
          </Button>
        </div>
      </div>
    </div>
  );
};

ProductBox.propTypes = {
  children: PropTypes.node,
  name: PropTypes.string,
  price: PropTypes.number,
  oldPrice: PropTypes.number,
  promo: PropTypes.string,
  id: PropTypes.string,
  stars: PropTypes.number,
  isFavorite: PropTypes.bool,
  toCompare: PropTypes.bool,
  image: PropTypes.string,
  addToFav: PropTypes.func,
  addToCompare: PropTypes.func,
  removeFromFav: PropTypes.func,
  removeFromCompare: PropTypes.func,
  changeRating: PropTypes.func,
  products: PropTypes.array,
  rated: PropTypes.bool,
};

ProductBox.defaultProps = {
  isFavorite: false,
  toCompare: false,
};

export default ProductBox;
