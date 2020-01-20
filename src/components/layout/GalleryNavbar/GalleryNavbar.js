import React, { Component } from 'react';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';

import styles from './GalleryNavbar.module.scss';

class GalleryNavbar extends Component {
  state = {
    menuActive: false,
  };

  toggleMenu = e => {
    e.preventDefault();
    this.setState((state, props) => ({
      menuActive: !state.menuActive,
    }));
  };

  render() {
    return (
      <div className={styles.root}>
        <div>
          <div
            className={
              'col-auto ' +
              styles.menu +
              ' ' +
              (this.state.menuActive ? styles.active : '')
            }
          >
            <ul>
              <li>
                <a href='#' onClick={this.toggleMenu}>
                  Featured
                </a>
              </li>
              <li>
                <a href='#' onClick={this.toggleMenu} className={styles.active}>
                  Top seller
                </a>
              </li>
              <li>
                <a href='#' onClick={this.toggleMenu}>
                  Sale off
                </a>
              </li>
              <li>
                <a href='#' onClick={this.toggleMenu}>
                  Top rated
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

GalleryNavbar.propTypes = {
  children: PropTypes.node,
};

export default GalleryNavbar;
