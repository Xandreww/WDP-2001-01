import React from 'react';
import PropTypes from 'prop-types';

import styles from './ProductPagePhoto.module.scss';

import Swipeable from '../../common/Swipeable/Swipeable';

/* Random photo to swipeable */
import image1 from '../../../assets/images/furnitureBed1.jpg';
import image2 from '../../../assets/images/furnitureBed2.jpg';
import image3 from '../../../assets/images/furnitureBed3.jpg';
import image4 from '../../../assets/images/furnitureBed4.jpg';
import image5 from '../../../assets/images/furnitureBed5.jpg';
import image6 from '../../../assets/images/furnitureBed6.jpg';
import image7 from '../../../assets/images/furnitureBed7.jpg';
import image8 from '../../../assets/images/furnitureBed8.jpg';

class ProductPagePhoto extends React.Component {
  state = {
    activePage: 0,
    selectedImage: this.props.photo,
  };

  rightAction() {
    this.setState(state => ({
      activePage: state.activePage + 1,
    }));
  }

  leftAction() {
    this.setState(state => ({
      activePage: state.activePage - 1,
    }));
  }

  render() {
    /* Random photo to swipeable */
    const sampleBrands = [
      { id: 1, image: image1 },
      { id: 2, image: image2 },
      { id: 3, image: image3 },
      { id: 4, image: image4 },
      { id: 5, image: image5 },
      { id: 6, image: image6 },
      { id: 7, image: image7 },
      { id: 8, image: image8 },
    ];

    const changeImage = image => {
      this.setState(state => ({
        selectedImage: image,
      }));
    };

    const brandsNumberOnSlide = 4;
    const pagesCount = Math.ceil(sampleBrands.length / brandsNumberOnSlide);

    const pages = [];
    for (let i = 0; i < pagesCount; i++) {
      pages.push(
        <div className={[styles.sliderRow, 'row'].join(' ')}>
          {sampleBrands
            .slice(i * brandsNumberOnSlide, (i + 1) * brandsNumberOnSlide)
            .map(item => (
              <div key={item.id}>
                <div className={styles.root}>
                  <div className={styles.photo}>
                    <img
                      onClick={() => changeImage(item.image)}
                      className={styles.furniturePhoto}
                      src={item.image}
                      alt={this.props.name}
                    />
                  </div>
                </div>
              </div>
            ))}
        </div>
      );
    }

    const renderPages = () => {
      return pages;
    };

    return (
      <div className={styles.root}>
        <div className='container'>
          <img
            className={styles.furniture}
            alt={this.props.name}
            src={this.state.selectedImage}
          />
          <Swipeable
            nextPage={() => this.rightAction()}
            prevPage={() => this.leftAction()}
            currentPage={this.state.activePage}
          >
            {renderPages()}
          </Swipeable>
        </div>
      </div>
    );
  }
}

ProductPagePhoto.propTypes = {
  photo: PropTypes.string,
  name: PropTypes.string,
};

export default ProductPagePhoto;
