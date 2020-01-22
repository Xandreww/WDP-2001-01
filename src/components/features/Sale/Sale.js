import React from 'react';
import styles from './Sale.module.scss';
import PropTypes from 'prop-types';

const Sale = ({ sale }) => {
  return (
    <div className={styles.root}>
      <div className='container'>
        <div className='row'>
          <div className={'col-12 col-md-6 mb-3 mb-md-0 ' + styles.leftBox}>
            <img src={sale.leftBox.bgc} alt={sale.leftBox.title} />
            <div className={styles.leftBoxBgc}>
              <h2 className={styles.title}>{sale.leftBox.title}</h2>
              <h2 className={styles.subTitle}>{sale.leftBox.subTitle}</h2>
              <h2 className={styles.sale}>{sale.leftBox.sale}</h2>
            </div>
          </div>
          <div className='col-12 col-md-6'>
            <div className='row '>
              <div className={'col-12 mb-3 ml-md-3 ' + styles.rightTop}>
                <img src={sale.rightTopBox.bgc} alt={sale.rightTopBox.title} />
                <div className={styles.rightTopBox}>
                  <h2 className={styles.title}>
                    <span className={styles.bold}>{sale.rightTopBox.boldTitle}</span>{' '}
                    <span className={styles.thin}>{sale.rightTopBox.title}</span>{' '}
                  </h2>
                  <h2 className={styles.subTitle}>{sale.rightTopBox.subTitle}</h2>
                  <h2 className={styles.price}>{sale.rightTopBox.price}</h2>
                </div>
              </div>
              <div className={'col-12 ml-md-3 ' + styles.rightBottom}>
                <img src={sale.rightBottomBox.bgc} alt={sale.rightBottomBox.title} />
                <div className={styles.rightBottomBox}>
                  <h2 className={styles.title}>
                    <span className={styles.bold}>{sale.rightBottomBox.boldTitle}</span>{' '}
                    <span className={styles.thin}>{sale.rightBottomBox.title}</span>
                  </h2>
                  <h2 className={styles.subTitle}>{sale.rightBottomBox.subTitle}</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Sale.propTypes = {
  sale: PropTypes.object,
};

export default Sale;
