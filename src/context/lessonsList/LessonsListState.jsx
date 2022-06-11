import {useReducer} from 'react'
import LessonsListContext from './lessonsListContext'
import lessonsListReducer from './lessonsListReducer'
import {SET_LESSONS_LIST_LOADING} from '../types'

export default function LessonsListState({children}) {
  const initialState = {
    isLoading: true
  }

  const [state, dispatch] = useReducer(lessonsListReducer, initialState)

  const setLessonsLoading = (boolean) => {
    dispatch({
      type: SET_LESSONS_LIST_LOADING,
      payload: boolean
    })
  }

  const {isLoading} = state

  return (
    <LessonsListContext.Provider
      value={{
        isLoading,
        setLessonsLoading
      }}
    >
      {children}
    </LessonsListContext.Provider>
  )
}
