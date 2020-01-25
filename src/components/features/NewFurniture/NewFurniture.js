import React from 'react';
import PropTypes from 'prop-types';

import styles from './NewFurniture.module.scss';
import ProductBox from '../../common/ProductBox/ProductBoxContainer';

import Swipeable from '../../common/Swipeable/Swipeable';

class NewFurniture extends React.Component {
  state = {
    activePage: 0,
    activeCategory: 'bed',
    splitPage: true,
  };

  fade() {
    const fadeableElement = document.getElementById('fade');
    const fadeable = fadeableElement.classList;

    fadeable.add(styles.fadeOut);

    setTimeout(() => {
      fadeable.add(styles.fadeIn);
    }, 550);

    setTimeout(() => {
      fadeable.remove(styles.fadeOut);
      fadeable.remove(styles.fadeIn);
    }, 600);
  }

  handlePageChange(newPage) {
    this.setState({
      activePage: newPage,
      splitPage: false,
    });
  }

  handleCategoryChange(newCategory) {
    this.fade();
    setTimeout(() => {
      this.setState({
        activeCategory: newCategory,
      });
    }, 450);
    setTimeout(() => {
      this.setState({
        activePage: 0,
      });
    }, 350);
    setTimeout(() => {
      this.setState({
        activePage: 0,
      });
    }, 700);
  }

  rightAction() {
    const newPage = this.state.activePage;

    if (this.state.splitPage) {
      this.setState({ activePage: newPage + 1 });
    } else {
      this.setState({ splitPage: true });
    }
  }

  leftAction() {
    const newPage = this.state.activePage;

    if (this.state.splitPage) {
      this.setState({ activePage: newPage - 1 });
    } else {
      this.setState({ splitPage: true });
    }
  }

  getProductCountFromMode(mode) {
    switch (mode) {
      case 'laptop':
        return 2;
      case 'tablet':
        return 2;
      case 'mobile':
        return 1;
      default:
        return 8;
    }
  }

  render() {
    const { categories, products, mode } = this.props;
    const { activeCategory, activePage } = this.state;
    const productCount = this.getProductCountFromMode(mode);
    const categoryProducts = products.filter(item => item.category === activeCategory);
    const pagesCount = Math.ceil(categoryProducts.length / productCount);

    const dots = [];
    const pages = [];
    for (let i = 0; i < pagesCount; i++) {
      dots.push(
        <li>
          <a
            onClick={() => this.handlePageChange(i)}
            className={i === activePage && styles.active}
          >
            page {i}
          </a>
        </li>
      );

      pages.push(
        <div className={'row ' + styles.swipeElement}>
          {categoryProducts
            .slice(i * productCount, (i + 1) * productCount)
            .map(item => (
              <div key={item.id} className='col-12 col-sm-6 col-xl-3'>
                <ProductBox {...item} />
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
          <div className={styles.panelBar}>
            <div className={'row no-gutters align-items-end ' + styles.panelBarElement}>
              <div className={'col-auto ' + styles.heading}>
                <h3>New furniture</h3>
              </div>
              <div className={'col ' + styles.menu}>
                <ul>
                  {categories.map(item => (
                    <li key={item.id}>
                      <a
                        className={item.id === activeCategory && styles.active}
                        onClick={() => this.handleCategoryChange(item.id)}
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className={'col-auto ' + styles.dots}>
                <ul>{dots}</ul>
              </div>
            </div>
          </div>
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

NewFurniture.propTypes = {
  children: PropTypes.node,
  mode: PropTypes.string,
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
    })
  ),
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      category: PropTypes.string,
      price: PropTypes.number,
      stars: PropTypes.number,
      promo: PropTypes.string,
      newFurniture: PropTypes.bool,
      favourited: PropTypes.bool,
      addedToCompare: PropTypes.bool,
    })
  ),
};

NewFurniture.defaultProps = {
  categories: [],
  products: [],
};

export default NewFurniture;
