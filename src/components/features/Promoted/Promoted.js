import React from 'react';
import styles from './Promoted.module.scss';
import PropTypes from 'prop-types';

import Button from '../../common/Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import PromotedProductBox from '../../common/PromotedProductBox/PromotedProductBoxContainer';
import HotDealsProductBox from '../../common/HotDealsProductBox/HotDealsProductBoxContainer';

const Promoted = () => {
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
};

Promoted.propTypes = {
  promotedProductBox: PropTypes.object,
  hotDealsProductBox: PropTypes.object,
};

export default Promoted;

/*
const Promoted = ({ promoted }) => {
  return (
    <div className={styles.root}>
      <div className='container'>
        <div className='row'>
          <div className='col-4'>
            <div className={styles.leftProduct}>
              <div className={styles.hotDealsBar}>
                <h2 className={styles.hotDealsBarTitle}>
                  {promoted.leftProduct.topBarTitle}
                </h2>
                <p className={`${styles.dots}`}>
                  <a href='#' className={`${styles.dot} ${styles.active}`}>
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
              <div className={styles.hotDealsBox}>
                <img
                  src={promoted.leftProduct.image}
                  alt={promoted.leftProduct.imageTitle}
                />
                <div className={styles.dealCounterContainer}>
                  <div className={styles.dealCounter}>
                    <h2
                      className={styles.root}
                    >{`${promoted.leftProduct.dealCounter.days.value} ${promoted.leftProduct.dealCounter.days.unit}`}</h2>
                  </div>
                  <div className={styles.dealCounter}>
                    <h2
                      className={styles.root}
                    >{`${promoted.leftProduct.dealCounter.hrs.value} ${promoted.leftProduct.dealCounter.hrs.unit}`}</h2>
                  </div>
                  <div className={styles.dealCounter}>
                    <h2
                      className={styles.root}
                    >{`${promoted.leftProduct.dealCounter.mins.value} ${promoted.leftProduct.dealCounter.mins.unit}`}</h2>
                  </div>
                  <div className={styles.dealCounter}>
                    <h2
                      className={styles.root}
                    >{`${promoted.leftProduct.dealCounter.secs.value} ${promoted.leftProduct.dealCounter.secs.unit}`}</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='col-8'>
            <div className='col'>
              <div className={styles.rightProduct}>
                <img
                  src={promoted.rightProduct.image}
                  alt={promoted.rightProduct.imageTitle}
                />
                <div className={styles.rightProductBox}>
                  <h2 className={styles.title}>
                    {promoted.rightProduct.title}{' '}
                    <strong>{promoted.rightProduct.titleBold}</strong>
                  </h2>
                  <h2 className={styles.dealDescription}>
                    {promoted.rightProduct.dealDescription}
                  </h2>
                  <Button className={styles.mainBtn}>Shop now</Button>
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
    </div>
  );
};

Promoted.propTypes = {
  promoted: PropTypes.object,
};

*/
