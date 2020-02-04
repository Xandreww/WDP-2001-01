import { connect } from 'react-redux';

import BlogPage from './BlogPage';

const mapStateToProps = state => ({
  blogs: state.blogs,
});

export default connect(mapStateToProps)(BlogPage);
