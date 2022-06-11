import {SHOW_POPUP, HIDE_POPUP, SET_LESSON_ID} from '../types'

const handlers = {
  [SHOW_POPUP]: (state) => ({...state, isShowed: true}),
  [HIDE_POPUP]: (state) => ({...state, isShowed: false}),
  [SET_LESSON_ID]: (state, {payload}) => ({...state, lessonId: payload}),
  DEFAULT: (state) => state
}

const popupReducer = (state, action) => {
  const handler = handlers[action.type] || handlers.DEFAULT
  return handler(state, action)
}

export default popupReducer
