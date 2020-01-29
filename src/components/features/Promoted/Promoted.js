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

  render() {
    const { promoted, hotDeals } = this.props;

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
      </div>
    );
  }
}

Promoted.propTypes = {
  promoted: PropTypes.array,
  hotDeals: PropTypes.array,
};

export default Promoted;
