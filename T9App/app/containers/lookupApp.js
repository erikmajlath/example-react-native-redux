import React from 'react';
import { bindActionCreators } from 'redux';
import Lookup from '../components/lookup';
import * as lookupActions from '../actions/lookupActions';
import { connect } from 'react-redux';

class LookupApp extends React.Component {
  render() {
    return (
      <Lookup
        lookup={this.props.lookup}
        {...this.props.actions}/>
    )
  }
}

const stateToProps = (state) => {
  return {
    lookup: state.lookup,
  }
}

const dispatchToProps = (dispatch) => ({
  actions: bindActionCreators(lookupActions, dispatch)
})


export default connect(stateToProps, dispatchToProps)(LookupApp)