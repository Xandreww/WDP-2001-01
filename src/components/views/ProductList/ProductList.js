import React from 'react';
import styles from './ProductList.module.scss';
import PropTypes from 'prop-types';
import { useParams, Redirect } from 'react-router-dom';
import ProductListBar from '../../layout/ProductListBar/ProductListBar';

import Swipeable from '../../common/Swipeable/Swipeable';
import ProductBox from '../../common/ProductBox/ProductBoxContainer';

const ProductList = ({ categories, products, mode }) => {
  const { categoryId } = useParams();
  const category = categories.find(cate => cate.id === categoryId);

  if (!category) {
    return <Redirect to='/notfound' />;
  } else {
    const { id } = category;
    const pages = [];
    const activeCategory = id;
    let activePage = 0;
    let splitPage = true;

    const getProductCountFromMode = mode => {
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
    };

    const rightAction = () => {
      const newPage = activePage;

      if (splitPage) {
        activePage = newPage + 1;
      } else {
        splitPage = true;
      }
    };

    const leftAction = () => {
      const newPage = activePage;

      if (splitPage) {
        activePage = newPage - 1;
      } else {
        splitPage = true;
      }
    };

    const categoryProducts = products.filter(item => item.category === activeCategory);
    const productCount = getProductCountFromMode(mode);
    const pagesCount = Math.ceil(categoryProducts.length / productCount);

    for (let i = 0; i < pagesCount; i++) {
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
        <ProductListBar />
        <div className={'container' + styles.content}>
          <div className={styles.panelBar}>
            <div className={'row no-gutters align-items-end ' + styles.panelBarElement}>
              <div className={'col-auto ' + styles.heading}>
                <h3>{category.name}</h3>
              </div>
            </div>
          </div>
          <Swipeable
            nextPage={() => rightAction()}
            prevPage={() => leftAction()}
            currentPage={activePage}
          >
            {renderPages()}
          </Swipeable>
        </div>
      </div>
    );
  }
};

ProductList.propTypes = {
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

export default ProductList;
