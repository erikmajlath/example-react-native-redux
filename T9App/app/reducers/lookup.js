import * as types from '../actions/actionTypes';

const initialState = {
  word: '',
  isFetching: false,
  matches: []
}

const lookup = (state = initialState, action = {}) => {
  switch (action.type){
    case types.CLEAR_MATCHES:
      return {
        ...state,
        matches: [],
        isFetching: false
      }
    case types.REQUEST_MATCHES:
      return {
        ...state,
        word: action.word,
        isFetching: true,
      }
    case types.RECEIVE_MATCHES:
      return {
        ...state,
        isFetching: false,
        matches: action.matches
      }
    default:
      return state
  }
}

export default lookup

