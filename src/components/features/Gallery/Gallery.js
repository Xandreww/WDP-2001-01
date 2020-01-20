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
  faCaretLeft,
} from '@fortawesome/free-solid-svg-icons';
import Button from '../../common/Button/Button';

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
                <ul className={styles.icons}>
                  <a href='#'>
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
                  <a href='#'>
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
