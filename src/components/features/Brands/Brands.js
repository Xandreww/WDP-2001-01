import React from 'react';
import PropTypes from 'prop-types';

import styles from './Brands.module.scss';
import SingleBrand from '../../common/SingleBrand/SingleBrand';

import Swipeable from '../../common/Swipeable/Swipeable';

class Brands extends React.Component {
  state = {
    activePage: 0,
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

  getBrandsCountFromMode(mode) {
    switch (mode) {
      case 'laptop':
        return 5;
      case 'tablet':
        return 3;
      case 'mobile':
        return 2;
      default:
        return 6;
    }
  }

  render() {
    const { sampleBrands, mode } = this.props;

    const brandsNumberOnSlide = this.getBrandsCountFromMode(mode);
    const pagesCount = Math.ceil(sampleBrands.length / brandsNumberOnSlide);

    const pages = [];
    for (let i = 0; i < pagesCount; i++) {
      pages.push(
        <div className={'row ' + styles.brandsElement} key={i}>
          {sampleBrands
            .slice(i * brandsNumberOnSlide, (i + 1) * brandsNumberOnSlide)
            .map(item => (
              <div key={item.id}>
                <SingleBrand {...item} />
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

Brands.propTypes = {
  sampleBrands: PropTypes.array,
  mode: PropTypes.string,
};

Brands.defaultProps = {
  sampleBrands: [],
};

export default Brands;
