import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../common/Button/Button';
import Jumbotron from 'react-bootstrap/Jumbotron';

import styles from './ErrorNotFound.module.scss';

const ErrorNotFound = () => {
  return (
    <Jumbotron className={styles.container}>
      <h1>Oops! That page can’t be found. Error: 404-not found.</h1>
      <p>
        It looks like nothing was found at this location. Maybe try one of the links in
        the menu or press back to go to the previous page.
      </p>
      <p>You can also go to main site:</p>
      <Link to='/' component={Button} variant='main'>
        Go to main
      </Link>
    </Jumbotron>
  );
};

export default ErrorNotFound;
