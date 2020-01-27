import { connect } from 'react-redux';

import HotDealsProductBox from './HotDealsProductBox';

const getHotDeal = ({ products }) => products.filter(item => item.hotDeal === true);

const mapStateToProps = state => ({
  products: getHotDeal(state),
});

export default connect(mapStateToProps)(HotDealsProductBox);
