import { connect } from 'react-redux';

import HotDealsProductBox from './HotDealsProductBox';

const mapStateToProps = state => ({
  products: state.products.filter(product => product.hotDeal),
});

export default connect(mapStateToProps)(HotDealsProductBox);
