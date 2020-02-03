import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductSearch from '../../features/ProductSearch/ProductSearch';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

import styles from './MenuBar.module.scss';
import Button from '../../common/Button/Button';

class MenuBar extends Component {
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
        <div className='container'>
          <div className='d-flex flex-row flex-sm-column-reverse flex-lg-row align-items-center flex-wrap'>
            <div className='col'>
              <ProductSearch />
            </div>
            <Button
              variant='outline'
              onClick={this.toggleMenu}
              className={styles.hamburger}
            >
              <FontAwesomeIcon icon={faBars}>x</FontAwesomeIcon>
            </Button>
            <div
              className={
                'col-auto ' +
                styles.menu +
                ' ' +
                (this.state.menuActive ? styles.active : '')
              }
            >
              <Button
                variant='outline'
                onClick={this.toggleMenu}
                className={styles.closeMenu}
              >
                <FontAwesomeIcon icon={faTimes}>x</FontAwesomeIcon>
              </Button>
              <ul>
                <li onClick={this.toggleMenu}>
                  <Link to='/' className={styles.active}>
                    Home
                  </Link>
                </li>
                <li onClick={this.toggleMenu}>
                  <Link to={`${process.env.PUBLIC_URL}/shop/dining`}>Furniture</Link>
                </li>
                <li onClick={this.toggleMenu}>
                  <Link to={`${process.env.PUBLIC_URL}/shop/chair`}>Chair</Link>
                </li>
                <li onClick={this.toggleMenu}>
                  <Link to={`${process.env.PUBLIC_URL}/shop/table`}>Table</Link>
                </li>
                <li onClick={this.toggleMenu}>
                  <Link to={`${process.env.PUBLIC_URL}/shop/sofa`}>Sofa</Link>
                </li>
                <li onClick={this.toggleMenu}>
                  <Link to={`${process.env.PUBLIC_URL}/shop/bed`}>Bedroom</Link>
                </li>
                <li onClick={this.toggleMenu}>
                  <Link to={`${process.env.PUBLIC_URL}/blog`}>Blog</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

MenuBar.propTypes = {
  children: PropTypes.node,
};

export default MenuBar;
