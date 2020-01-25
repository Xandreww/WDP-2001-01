import { connect } from 'react-redux';

import HotDealsProductBox from './HotDealsProductBox';

const mapStateToProps = state => ({
  hotDeals: state.hotDealsProductBox,
});

export default connect(mapStateToProps)(HotDealsProductBox);
