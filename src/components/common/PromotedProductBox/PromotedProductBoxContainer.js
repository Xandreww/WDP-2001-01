import { connect } from 'react-redux';

import PromotedProductBox from './PromotedProductBox';

const mapStateToProps = state => ({
  promoted: state.promoted,
});

export default connect(mapStateToProps)(PromotedProductBox);
