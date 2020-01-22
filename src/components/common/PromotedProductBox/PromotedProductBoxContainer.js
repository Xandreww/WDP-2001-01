import { connect } from 'react-redux';

import PromotedProductBox from './PromotedProductBox';

const mapStateToProps = state => ({
  promotedProductBox: state.promotedProductBox,
});

export default connect(mapStateToProps)(PromotedProductBox);
