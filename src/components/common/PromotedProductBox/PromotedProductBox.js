import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button/Button';
import styles from './PromotedProductBox.module.scss';

const PromotedProductBox = ({ promotedProductBox }) => {
  return (
    <div className={styles.root}>
      <img src={promotedProductBox.image} alt={promotedProductBox.imageName} />
      <div className={styles.text}>
        <h3 className={styles.title}>
          {promotedProductBox.softTitle}
          <strong> {promotedProductBox.strongTitle}</strong>
        </h3>
        <p className={styles.description}>{promotedProductBox.description}</p>
      </div>
      <Button className={styles.mainBtn}>Shop now</Button>
    </div>
  );
};

PromotedProductBox.propTypes = {
  promotedProductBox: PropTypes.object,
};

export default PromotedProductBox;
