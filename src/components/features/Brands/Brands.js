import React from 'react';
import PropTypes from 'prop-types';
import styles from './Brands.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';

const Brands = ({ sampleBrands }) => {
  return (
    <div className={styles.root}>
      <div className='container'>
        <div className='row'>
          <div className='col'>
            <div className={styles.photos}>
              <div className={styles.iconBackground}>
                <FontAwesomeIcon
                  className={styles.icon}
                  icon={faChevronLeft}
                ></FontAwesomeIcon>
              </div>
              {sampleBrands.map(item => (
                <img
                  className={styles.brandImage}
                  key={item}
                  src={item}
                  alt='brand logo'
                />
              ))}
              <div className={styles.iconBackground}>
                <FontAwesomeIcon
                  className={styles.icon}
                  icon={faChevronRight}
                ></FontAwesomeIcon>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Brands.propTypes = {
  sampleBrands: PropTypes.array,
};

Brands.defaultProps = {
  isFavorite: false,
};

export default Brands;
