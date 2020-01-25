import { connect } from 'react-redux';

import HotDealsProductBox from './HotDealsProductBox';

const mapStateToProps = state => ({
  hotDeals: state.hotDeals,
});

export default connect(mapStateToProps)(HotDealsProductBox);
