import { connect } from 'react-redux';

import PromotedProductBox from './PromotedProductBox';

const mapStateToProps = state => ({
  promoted: state.PromotedProductBox,
});

export default connect(mapStateToProps)(PromotedProductBox);
