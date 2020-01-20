import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Gallery.module.scss';
import MiniGallery from '../../common/MiniGallery/MiniGallery';
import GalleryNavbar from '../../layout/GalleryNavbar/GalleryNavbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHeart,
  faExchangeAlt,
  faEye,
  faShoppingBag,
} from '@fortawesome/free-solid-svg-icons';
// import Button from '../../common/Button/Button';

class Gallery extends Component {
  render() {
    const { products } = this.props;

    return (
      <div className={styles.root}>
        <div className='container'>
          <div className='row'>
            {/* col 1 starts here */}
            <div className={'col-6'}>
              <div className={styles.panelBar}>
                <div className='row no-gutters align-items-end'>
                  <div className={'col-auto ' + styles.heading}>
                    <h3>Furniture gallery</h3>
                  </div>
                  <div className={'col'}></div>
                </div>
              </div>
              <div className={styles.leftBorder}>
                <GalleryNavbar />
                <div className={styles.photo}>
                  <img
                    className={styles.leftImage}
                    src={products[0].image}
                    alt={products[0].name}
                  />
                </div>
                <ul className={styles.icons}>
                  <li>
                    <FontAwesomeIcon
                      className={styles.icon + ' ' + styles.heart}
                      icon={faHeart}
                    ></FontAwesomeIcon>
                  </li>
                  <li>
                    {' '}
                    <FontAwesomeIcon
                      className={styles.icon}
                      icon={faExchangeAlt}
                    ></FontAwesomeIcon>
                  </li>
                  <li>
                    {' '}
                    <FontAwesomeIcon
                      className={styles.icon}
                      icon={faEye}
                    ></FontAwesomeIcon>
                  </li>
                  <li>
                    {' '}
                    <FontAwesomeIcon
                      className={styles.icon}
                      icon={faShoppingBag}
                    ></FontAwesomeIcon>
                  </li>
                </ul>
                <div className={styles.miniGallery}>
                  <MiniGallery products={products} />
                </div>
              </div>
            </div>
            {/* col 1 ends here */}
            <div className={'col-6'}>
              <div className={styles.rightColumn}>
                {
                  <img
                    className={styles.rightImage}
                    src={products[1].image}
                    alt={products[1].name}
                  />
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Gallery.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      // id: PropTypes.string,
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

Gallery.defaultProps = {
  products: [],
};

export default Gallery;
