import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';

class MainLayout extends Component {
  componentDidMount() {
    this.resize();

    window.addEventListener('resize', () => {
      this.resize();
    });
  }

  resize() {
    if (window.innerWidth < 500) {
      this.props.changeMode('mobile');
    } else if (window.innerWidth < 1000) {
      this.props.changeMode('tablet');
    } else if (window.innerWidth > 1300) {
      this.props.changeMode('desktop');
    }
  }

  render() {
    const { children } = this.props;
    return (
      <div>
        <Header />
        {children}
        <Footer />
      </div>
    );
  }
}

MainLayout.propTypes = {
  children: PropTypes.node,
  changeMode: PropTypes.func,
};

export default MainLayout;
