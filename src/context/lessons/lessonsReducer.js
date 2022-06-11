import {
  GET_LESSONS,
  SET_LESSONS_LOADING,
  GET_FILIALS,
  GET_GROUPS,
  GET_STUDENTS,
  CHANGE_LESSONS,
  SET_LESSONS_ERROR,
  SET_ADDITIONAL_LOADING
} from '../types'

const handlers = {
  [SET_LESSONS_LOADING]: (state, {payload}) => ({...state, loading: payload}),
  [GET_LESSONS]: (state, {payload}) => ({...state, lessons: payload}),
  [GET_GROUPS]: (state, {payload}) => ({...state, groups: payload}),
  [GET_FILIALS]: (state, {payload}) => ({...state, filials: payload}),
  [GET_STUDENTS]: (state, {payload}) => ({...state, students: payload}),
  [CHANGE_LESSONS]: (state, {payload}) => ({...state, lessons: payload}),
  [SET_ADDITIONAL_LOADING]: (state, {payload}) => ({
    ...state,
    isAdditionalLoading: payload
  }),
  [SET_LESSONS_ERROR]: (state) => ({...state, error: true}),
  DEFAULT: (state) => state
}

const lessonsReducer = (state, action) => {
  const handler = handlers[action.type] || handlers.DEFAULT
  return handler(state, action)
}

export default lessonsReducer
