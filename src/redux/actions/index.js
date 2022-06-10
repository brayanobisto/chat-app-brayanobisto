import { SET_USER, SET_MESSAGES } from '../action-types'

export const setUser = user => {
  return {
    type: SET_USER,
    payload: user
  }
}

export const setMessages = messages => {
  return {
    type: SET_MESSAGES,
    payload: messages
  }
}
