import { connect } from 'react-redux';

import BlogBox from './BlogBox';

const mapStateToProps = state => ({
  blogBox1: state.blogBox1,
  blogBox2: state.blogBox2,
  blogBox3: state.blogBox3,
});

export default connect(mapStateToProps)(BlogBox);
