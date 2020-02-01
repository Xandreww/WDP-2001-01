import { connect } from 'react-redux';

import HotDealsProductBox from './HotDealsProductBox';
import getHotDeal from '../../../redux/productsRedux';

const mapStateToProps = state => ({
  products: getHotDeal({ state }),
});

export default connect(mapStateToProps)(HotDealsProductBox);
