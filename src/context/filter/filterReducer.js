import {SET_FILTERED_LESSONS, SET_FILTERED_TYPE} from '../types'

const handlers = {
  [SET_FILTERED_LESSONS]: (state, {payload}) => ({
    ...state,
    filteredLessons: payload
  }),
  [SET_FILTERED_TYPE]: (state, {payload}) => ({
    ...state,
    filterType: payload
  }),
  DEFAULT: (state) => state
}

const filterReducer = (state, action) => {
  const handler = handlers[action.type] || handlers.DEFAULT
  return handler(state, action)
}

export default filterReducer
