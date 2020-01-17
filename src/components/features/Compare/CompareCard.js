import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../common/Button/Button';
import Card from 'react-bootstrap/Card';
import styles from './Compare.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const CompareCard = ({ name, id, image, removeFromCompare }) => {
  const compareHandler = (e, id) => {
    e.preventDefault();
    removeFromCompare(id);
  };

  return (
    <Card className={styles.card}>
      <div className={styles.imgContainer}>
        <Card.Img className={styles.cardImg} variant='top' src={image} />
        <FontAwesomeIcon
          onClick={e => compareHandler(e, id)}
          className={styles.cardIcon}
          icon={faTimes}
        ></FontAwesomeIcon>
      </div>
      <Card.Body className={styles.cardBody}>
        <Card.Title>{name}</Card.Title>
        <Button variant='small'>Compare</Button>
      </Card.Body>
    </Card>
  );
};

CompareCard.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string,
  removeFromCompare: PropTypes.func,
  image: PropTypes.string,
};

export default CompareCard;
