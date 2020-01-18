import { connect } from 'react-redux';

import Sale from './Sale';

const mapStateToProps = state => ({
  sale: state.sale,
});

export default connect(mapStateToProps)(Sale);
