import { connect } from 'react-redux';

import BlogBox from './BlogBox';

const mapStateToProps = state => ({
  blogBox: state.blogBox,
});

export default connect(mapStateToProps)(BlogBox);
