import {useContext, useReducer} from 'react'
import LessonsContext from './lessonsContext'
import AuthContext from '../auth/authContext'
import lessonsReducer from './lessonsReducer'
import {getQueryRange} from '../../utils/utils'
import get from '../../fetch/get'

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

  const onError = () => {
    dispatch({type: SET_LESSONS_ERROR})
  }

  const getLessons = async (date = getQueryRange()) => {
    const onSuccess = (res) => {
      dispatch({
        type: GET_LESSONS,
        payload: res.data
      })
    }

    await get({
      params: {date, userId: user.userId},
      onError,
      onSuccess,
      urlExtension: '/lessons'
    })
  }

  const getFilials = async () => {
    const onSuccess = (res) => {
      dispatch({
        type: GET_FILIALS,
        payload: res.data
      })
    }

    await get({
      onError,
      onSuccess,
      urlExtension: '/filials'
    })
  }

  const getStudents = async () => {
    const onSuccess = (res) => {
      dispatch({
        type: GET_STUDENTS,
        payload: res.data.users
      })
    }

    await get({
      onError,
      onSuccess,
      urlExtension: '/students'
    })
  }

  const getGroups = async () => {
    const onSuccess = (res) => {
      dispatch({
        type: GET_GROUPS,
        payload: res.data
      })
    }

    await get({
      onError,
      onSuccess,
      urlExtension: '/groups'
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
