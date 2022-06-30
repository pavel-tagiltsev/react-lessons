import {useContext, useReducer} from 'react'
import LessonsContext from './lessonsContext'
import AuthContext from '../auth/authContext'
import lessonsReducer from './lessonsReducer'
import {getQueryRange} from '../../utils/utils'
import LessonsApi from '../../api/LessonsApi'

import {
  GET_GROUPS,
  GET_LESSONS,
  GET_FILIALS,
  GET_STUDENTS,
  CHANGE_LESSONS,
  SET_LESSONS_ERROR,
  SET_LESSONS_LOADING,
  SET_ADDITIONAL_LOADING
} from '../types'

export default function LessonsState({children}) {
  const initialState = {
    error: false,
    groups: null,
    lessons: null,
    filials: null,
    loading: true,
    students: null,
    isAdditionalLoading: true
  }

  const [state, dispatch] = useReducer(lessonsReducer, initialState)

  const {user} = useContext(AuthContext)

  const setAppLoading = (boolean) => {
    dispatch({
      type: SET_LESSONS_LOADING,
      payload: boolean
    })
  }

  const setAdditionalLoading = (boolean) => {
    dispatch({
      type: SET_ADDITIONAL_LOADING,
      payload: boolean
    })
  }

  const getLessons = async (date = getQueryRange()) => {
    const response = await LessonsApi.getLessons({date, userId: user.userId})

    if (response.status !== 200) {
      dispatch({type: SET_LESSONS_ERROR})
      return
    }

    dispatch({
      type: GET_LESSONS,
      payload: response.data
    })
  }

  const getFilials = async () => {
    const response = await LessonsApi.getFilials()

    if (response.status !== 200) {
      dispatch({type: SET_LESSONS_ERROR})
      return
    }

    dispatch({
      type: GET_FILIALS,
      payload: response.data
    })
  }

  const getStudents = async () => {
    const response = await LessonsApi.getStudents()

    if (response.status !== 200) {
      dispatch({type: SET_LESSONS_ERROR})
      return
    }

    dispatch({
      type: GET_STUDENTS,
      payload: response.data
    })
  }

  const getGroups = async () => {
    const response = await LessonsApi.getGroups()

    if (response.status !== 200) {
      dispatch({type: SET_LESSONS_ERROR})
      return
    }

    dispatch({
      type: GET_GROUPS,
      payload: response.data
    })
  }

  const changeLessons = (lessons) => {
    dispatch({
      type: CHANGE_LESSONS,
      payload: lessons
    })
  }

  const {
    error,
    groups,
    lessons,
    filials,
    loading,
    students,
    isAdditionalLoading
  } = state

  return (
    <LessonsContext.Provider
      value={{
        setAppLoading,
        getLessons,
        getFilials,
        getGroups,
        getStudents,
        loading,
        lessons,
        filials,
        groups,
        students,
        changeLessons,
        error,
        isAdditionalLoading,
        setAdditionalLoading
      }}
    >
      {children}
    </LessonsContext.Provider>
  )
}
