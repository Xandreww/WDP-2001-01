import { connect } from 'react-redux';

import LatestBlog from './LatestBlog';

const mapStateToProps = state => ({
  blogs: state.blogs,
});

export default connect(mapStateToProps)(LatestBlog);
