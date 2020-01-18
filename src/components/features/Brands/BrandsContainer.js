import { connect } from 'react-redux';

import Brands from './Brands';

const mapStateToProps = state => ({
  sampleBrands: state.sampleBrands,
});

export default connect(mapStateToProps)(Brands);
