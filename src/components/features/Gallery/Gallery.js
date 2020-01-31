import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Gallery.module.scss';
import MiniGallery from '../../common/MiniGallery/MiniGallery';
import GalleryNavbar from '../../layout/GalleryNavbar/GalleryNavbar';
import Icons from '../../common/Icons/Icons';
import Button from '../../common/Button/Button';
import StarsRating from '../../common/StarsRating/StarsRating';

class Gallery extends Component {
  render() {
    const { products, changeRating } = this.props;

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
                  {products[1] && (
                    <img
                      className={styles.leftImage}
                      src={products[1].image}
                      alt={products[1].name}
                    />
                  )}
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
                  {products[1] && (
                    <div className={styles.starRating}>
                      <h5>{products[1].name}</h5>
                      <StarsRating
                        stars={products[1].stars}
                        rated={products[1].rated}
                        changeRating={changeRating}
                        id={products[1].id}
                      />
                      <div className={styles.corner + ' ' + styles.leftCorner}></div>
                      <div className={styles.corner + ' ' + styles.rightCorner}></div>
                    </div>
                  )}
                </div>
              </div>
            </div>
            {/* col 1 ends here */}
            <div className={'col-6'}>
              <div className={styles.rightColumn}>
                {products[0] && (
                  <img
                    className={styles.rightImage}
                    src={products[0].image}
                    alt={products[0].name}
                  />
                )}
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
      id: PropTypes.string,
      name: PropTypes.string,
      stars: PropTypes.number,
      rated: PropTypes.bool,
      image: PropTypes.string,
    })
  ),
  changeRating: PropTypes.func,
};

Gallery.defaultProps = {
  products: [],
};

export default Gallery;
