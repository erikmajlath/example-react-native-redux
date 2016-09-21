import React from 'react';
import { bindActionCreators } from 'redux';
import Lookup from '../components/lookup';
import * as lookupActions from '../actions/lookupActions';
import { connect } from 'react-redux';

class LookupApp extends React.Component {
  render() {
    return (
      <Lookup
        word={this.props.word}
        matches={this.props.matches}
        {...this.props.actions}/>
    )
  }
}

const stateToProps = (state) => {
  return {
    word: state.lookup.word,
    matches: state.lookup.matches
  }
}

const dispatchToProps = (dispatch) => ({
  actions: bindActionCreators(lookupActions, dispatch)
})


export default connect(stateToProps, dispatchToProps)(LookupApp)