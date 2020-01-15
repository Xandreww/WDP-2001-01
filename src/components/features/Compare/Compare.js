import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from '../../common/Button/Button';
import Modal from 'react-bootstrap/Modal';
import CompareCard from './CompareCard';

import styles from './Compare.module.scss';

const Compare = ({ products, removeFromCompare }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const compareCount = products.filter(product => product.toCompare === true).length;

  return (
    <>
      <Button variant='small' className={styles.compareButton} onClick={handleShow}>
        To compare {compareCount}
      </Button>

      <Modal show={show} dialogClassName={styles.bottomSheet} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>To compare:</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className={styles.modalBody}>
            {products
              .filter(product => product.toCompare === true)
              .map(product => (
                <CompareCard
                  key={product.id}
                  id={product.id}
                  removeFromCompare={removeFromCompare}
                  name={product.name}
                />
              ))}
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='small' onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

Compare.propTypes = {
  products: PropTypes.array,
  removeFromCompare: PropTypes.func,
};

export default Compare;
