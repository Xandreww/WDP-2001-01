import { connect } from 'react-redux';

import Promoted from './Promoted';

const mapStateToProps = state => ({
  hotDeals: state.hotDeals,
  promoted: state.promoted,
});

export default connect(mapStateToProps)(Promoted);
