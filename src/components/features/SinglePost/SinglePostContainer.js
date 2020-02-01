import { connect } from 'react-redux';

import SinglePost from './SinglePost';

const mapStateToProps = state => ({
  blog: state.blog,
});

export default connect(mapStateToProps)(SinglePost);
