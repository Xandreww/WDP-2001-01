import { connect } from 'react-redux';

import Brands from './Brands';

const mapStateToProps = state => ({
  sampleBrands: state.sampleBrands,
  mode: state.other.mode,
});

export default connect(mapStateToProps)(Brands);
