import React from 'react';
import PropTypes from 'prop-types';

import styles from './SingleBrand.module.scss';

const SingleBrand = ({ image }) => {
  return (
    <div className={styles.root}>
      <div className={styles.photo}>
        <img className={styles.brandImage} src={image} alt='brnad logo' />
      </div>
    </div>
  );
};

SingleBrand.propTypes = {
  image: PropTypes.string,
};

export default SingleBrand;
