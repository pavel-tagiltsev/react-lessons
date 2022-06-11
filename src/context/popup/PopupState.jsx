import {useReducer} from 'react'
import PopupContext from './popupContext'
import popupReducer from './popupReducer'

import {SHOW_POPUP, HIDE_POPUP, SET_LESSON_ID} from '../types'

export default function PopupState({children}) {
  const initialState = {
    lessonId: null,
    isShowed: false
  }

  const [state, dispatch] = useReducer(popupReducer, initialState)
  const {isShowed, lessonId} = state

  const setLessonId = (id) => {
    dispatch({
      type: SET_LESSON_ID,
      payload: id
    })
  }

  const showPopup = () => {
    dispatch({type: SHOW_POPUP})
  }

  const hidePopup = () => {
    dispatch({type: HIDE_POPUP})
  }

  return (
    <PopupContext.Provider
      value={{
        isShowed,
        lessonId,
        showPopup,
        hidePopup,
        setLessonId
      }}
    >
      {children}
    </PopupContext.Provider>
  )
}
