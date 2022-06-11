import {SET_LESSONS_LIST_LOADING} from '../types'

const handlers = {
  [SET_LESSONS_LIST_LOADING]: (state, {payload}) => ({
    ...state,
    isLoading: payload
  }),
  DEFAULT: (state) => state
}

const lessonsListReducer = (state, action) => {
  const handler = handlers[action.type] || handlers.DEFAULT
  return handler(state, action)
}

export default lessonsListReducer
