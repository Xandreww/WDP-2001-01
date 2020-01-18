import React from 'react';
import PropTypes from 'prop-types';

import styles from './Feedback.module.scss';
import SingleFeedback from '../../common/SingleFeedback/SingleFeedback';

class Feedback extends React.Component {
  state = {
    activePage: 0,
  };

  handlePageChange(newPage) {
    this.setState({ activePage: newPage });
  }

  render() {
    const { feedbacks } = this.props;
    const { activePage } = this.state;

    const pagesCount = 3;

    const dots = [];
    for (let i = 0; i < pagesCount; i++) {
      dots.push(
        <li key={i + activePage}>
          <a
            onClick={() => this.handlePageChange(i)}
            className={i === activePage && styles.active}
          >
            page {i}
          </a>
        </li>
      );
    }

    return (
      <div className={styles.root}>
        <div className='container'>
          <div className={styles.panelBar}>
            <div className='row no-gutters align-items-end'>
              <div className={'col-auto ' + styles.heading}>
                <h3>Client Feedback</h3>
              </div>
              <div className={'col ' + styles.menu}></div>
              <div className={'col-auto ' + styles.dots}>
                <ul>{dots}</ul>
              </div>
            </div>
          </div>
          <div className='row'>
            {feedbacks[this.state.activePage] && (
              <div key={feedbacks[this.state.activePage].id}>
                <SingleFeedback {...feedbacks[this.state.activePage]} />
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

Feedback.propTypes = {
  feedbacks: PropTypes.array,
};

Feedback.defaultProps = {
  feedbacks: [],
};

export default Feedback;
