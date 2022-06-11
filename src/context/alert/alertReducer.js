import {SET_ALERT, SET_SUCCESS_MESSAGE} from '../types'

const handlers = {
  [SET_ALERT]: (state, {payload}) => ({...state, alert: payload}),
  [SET_SUCCESS_MESSAGE]: (state, {payload}) => ({
    ...state,
    successMessage: payload
  }),
  DEFAULT: (state) => state
}

const alertReducer = (state, action) => {
  const handler = handlers[action.type] || handlers.DEFAULT
  return handler(state, action)
}

export default alertReducer
