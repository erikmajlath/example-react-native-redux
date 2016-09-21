import * as types from './actionTypes'

const requestMatches = (word) => {
  return {
    type: types.REQUEST_MATCHES,
    word
  }
}

const receiveMatches = (matches) => {
  return {
    type: types.RECEIVE_MATCHES,
    matches
  }
}

const clearMatches = () => {
  return {
    type: types.CLEAR_MATCHES
  }
}

export const fetchMatches = (word) => {

  return (dispatch) => {
    dispatch(requestMatches(word))

    // Do not request for empty string
    if(!word) {
      dispatch(clearMatches())
      return;
    }

    return fetch(`http://localhost:3000/t9/${word}`)
      .then(response => response.json())
      .then(json => {
        dispatch(receiveMatches(json))
      })
      .catch(error => console.log(error))
  }

}
