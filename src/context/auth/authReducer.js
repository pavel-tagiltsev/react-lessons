import {LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT} from '../types'

const handlers = {
  [LOGIN_SUCCESS]: (state, {payload}) => ({
    ...state,
    isLoggedIn: true,
    user: payload
  }),
  [LOGIN_FAIL]: (state) => ({...state, isLoggedIn: false, user: null}),
  [LOGOUT]: (state) => ({...state, isLoggedIn: false, user: null}),
  DEFAULT: (state) => state
}

const authReducer = (state, action) => {
  const handler = handlers[action.type] || handlers.DEFAULT
  return handler(state, action)
}

export default authReducer
