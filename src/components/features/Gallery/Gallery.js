import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Gallery.module.scss';
import MiniGallery from '../../common/MiniGallery/MiniGallery';
import GalleryNavbar from '../../layout/GalleryNavbar/GalleryNavbar';
import Icons from '../../common/Icons/Icons';
import Button from '../../common/Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';

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
                    src={products[1].image}
                    alt={products[1].name}
                  />
                </div>
                <Icons />
                <div className={styles.miniGallery}>
                  <MiniGallery products={products} />
                </div>
                <div className={styles.rating}>
                  <div className={styles.priceRating}>
                    <h2 className={styles.priceLower}>$120.00</h2>
                    <h2 className={styles.priceHigher}>$160.00</h2>
                  </div>
                  <div className={styles.starRating}>
                    <h5>{products[1].name}</h5>
                    <div className={styles.stars}>
                      {[1, 2, 3, 4, 5].map(i => (
                        <a key={i} href='#'>
                          {i <= products[1].stars ? (
                            <FontAwesomeIcon icon={faStar}>
                              {i} products[1].stars
                            </FontAwesomeIcon>
                          ) : (
                            <FontAwesomeIcon icon={farStar}>
                              {i} products[1].stars
                            </FontAwesomeIcon>
                          )}
                        </a>
                      ))}
                    </div>
                    <div className={styles.corner + ' ' + styles.leftCorner}></div>
                    <div className={styles.corner + ' ' + styles.rightCorner}></div>
                  </div>
                </div>
              </div>
            </div>
            {/* col 1 ends here */}
            <div className={'col-6'}>
              <div className={styles.rightColumn}>
                {
                  <img
                    className={styles.rightImage}
                    src={products[0].image}
                    alt={products[0].name}
                  />
                }
                <article>
                  <h2>
                    <span className={styles.from}>From</span>{' '}
                    <span className={styles.price}>$50.80</span>{' '}
                  </h2>
                  <h2 className={styles.furniture}>Bedroom Bed</h2>
                  <Button variant='main' className={styles.button}>
                    Shop now
                  </Button>
                </article>
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
      stars: PropTypes.number,
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
