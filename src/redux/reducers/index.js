import { SET_USER, SET_MESSAGES } from '../action-types'

const initialState = {
  user: undefined,
  messages: []
}

const reducer = (state = initialState, action) => {
  const { type, payload } = action

  switch (type) {
    case SET_USER:
      return { ...state, user: payload }

    case SET_MESSAGES:
      return { ...state, messages: payload }

    default:
      return state
  }
}

export default reducer
