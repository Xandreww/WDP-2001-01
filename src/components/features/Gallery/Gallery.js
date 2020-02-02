import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Gallery.module.scss';
import MiniGallery from '../../common/MiniGallery/MiniGallery';
import Icons from '../../common/Icons/IconsContainer';
import Button from '../../common/Button/Button';
import StarsRating from '../../common/StarsRating/StarsRating';
import GalleryBox from '../../common/GalleryBox/GalleryBox';

class Gallery extends Component {
  state = {
    activeSubcategory: 'featured',
    activeProduct: {},
  };

  handleSubcategoryChange(newSubcategory) {
    this.setState({ activeSubcategory: newSubcategory });

    this.handleProductChange({});
  }

  handleProductChange(newProduct) {
    this.setState({ activeProduct: newProduct });
  }

  render() {
    const { products, changeRating, subcategories } = this.props;
    const { activeSubcategory, activeProduct } = this.state;

    const subcategoryProducts = products.filter(
      item => item.subcategory === activeSubcategory
    );

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
                <div className={styles.menu}>
                  <ul>
                    {subcategories.map(item => (
                      <li
                        className={item.id === activeSubcategory && styles.active}
                        key={item.id}
                      >
                        <a onClick={() => this.handleSubcategoryChange(item.id)}>
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={styles.photo}>
                  {activeProduct.id
                    ? ''
                    : this.handleProductChange(subcategoryProducts[0])}
                  {subcategoryProducts
                    .filter(product => product.id === activeProduct.id)
                    .map(item => (
                      <GalleryBox key={item.id} {...item} />
                    ))}
                </div>
                <Icons selectedProduct={products[1] && products[1]} />
                <div className={styles.miniGallery}>
                  <MiniGallery products={products} />
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
  subcategories: PropTypes.array,
};

Gallery.defaultProps = {
  products: [],
};

export default Gallery;
