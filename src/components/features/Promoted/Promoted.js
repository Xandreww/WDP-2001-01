import React from 'react';
import styles from './Promoted.module.scss';
import PropTypes from 'prop-types';

import Button from '../../common/Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import PromotedProductBox from '../../common/PromotedProductBox/PromotedProductBoxContainer';
import HotDealsProductBox from '../../common/HotDealsProductBox/HotDealsProductBoxContainer';

class Promoted extends React.Component {
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

  render() {
    return (
      <div className={styles.root}>
        <div className='container'>
          <div className='row'>
            <div className='col-4'>
              <div className={styles.promotedBar}>
                <h4 className={`col-6 ${styles.promotedBarTitle}`}>HOT DEALS</h4>
                <p className={`col-6 text-right ${styles.dots}`}>
                  <a href='#' className={styles.dot}>
                    <span></span>
                  </a>
                  <a href='#' className={styles.dot}>
                    <span></span>
                  </a>
                  <a href='#' className={styles.dot}>
                    <span></span>
                  </a>
                </p>
              </div>
              <HotDealsProductBox />
            </div>
            <div className='col-8'>
              <PromotedProductBox />
              <div className={styles.btns}>
                <Button className={styles.btn}>
                  <FontAwesomeIcon icon={faAngleLeft}></FontAwesomeIcon>
                </Button>
                <Button className={styles.btn}>
                  <FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Promoted.propTypes = {
  promotedProductBox: PropTypes.object,
  hotDealsProductBox: PropTypes.object,
};

export default Promoted;
