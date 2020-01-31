import React from 'react';
import styles from './Promoted.module.scss';
import PropTypes from 'prop-types';

import Button from '../../common/Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import PromotedProductBox from '../../common/PromotedProductBox/PromotedProductBox';
import HotDealsProductBox from '../../common/HotDealsProductBox/HotDealsProductBox';

class Promoted extends React.Component {
  state = {
    activePage: 0,
  };

  handlePageChange(newPage) {
    this.setState({
      activePage: newPage,
    });
  }

  rightAction() {
    const newPage = this.state.activePage;

    this.setState(state => ({
      activePage: newPage + 1,
    }));
  }

  leftAction() {
    const newPage = this.state.activePage;

    this.setState(state => ({
      activePage: newPage - 1,
    }));
  }

  render() {
    const { promoted, hotDeals } = this.props;
    const { activePage } = this.state;

    const pagesNumberOnSlide = 1;
    const pagesCount = Math.ceil(hotDeals.length / pagesNumberOnSlide);

    const dots = [];
    const pages = [];
    for (let i = 0; i < pagesCount; i++) {
      dots.push(
        <li key={i + activePage}>
          <a
            onClick={() => this.handlePageChange(i)}
            className={i === activePage && styles.active}
          >
            page {i}
          </a>
        </li>
      );
      pages.push(
        <div className={'row' + ' ' + styles.swipeContainer}>
          <HotDealsProductBox {...hotDeals[i]} />
        </div>
      );
    }

    return (
      <div className={styles.root}>
        <div className='container'>
          <div className='row'>
            <div className='col-4'>
              <div className={styles.promotedBar}>
                <h4 className={`col-6 ${styles.promotedBarTitle}`}>HOT DEALS</h4>
                <p className={`col-6 text-right ${styles.dots}`}>
                  <div className={'col-auto ' + styles.dots}>
                    <ul>{dots}</ul>
                  </div>
                </p>
              </div>
              <div className={styles.hotDealsList}>
                {hotDeals.map(hotDeals => {
                  return (
                    <div key={hotDeals.id} className={`${styles.hotDealsProduct} `}>
                      <HotDealsProductBox {...hotDeals} />
                    </div>
                  );
                })}
              </div>
            </div>
            <div className='col-8'>
              <div className={styles.promotedContainer}>
                <div className={styles.promotedContent}>
                  {promoted.map(promoted => {
                    return (
                      <div key={promoted.id} className={styles.singlePromoted}>
                        <PromotedProductBox {...promoted} />
                      </div>
                    );
                  })}
                </div>
                <div className={styles.btns}>
                  <Button
                    onClick={() => this.leftActionPromoted()}
                    className={styles.btn}
                  >
                    <FontAwesomeIcon icon={faAngleLeft}></FontAwesomeIcon>
                  </Button>
                  <Button
                    onClick={() => this.rightActionPromoted()}
                    className={styles.btn}
                  >
                    <FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Promoted.propTypes = {
  promoted: PropTypes.array,
  hotDeals: PropTypes.array,
};

export default Promoted;
