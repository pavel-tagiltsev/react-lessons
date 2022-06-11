import {useReducer} from 'react'
import AlertContext from './alertContext'
import alertReducer from './alertReducer'
import {SET_ALERT, SET_SUCCESS_MESSAGE} from '../types'

export default function AuthState({children}) {
  const initialState = {
    alert: '',
    successMessage: false
  }

  const [state, dispatch] = useReducer(alertReducer, initialState)
  const {alert, successMessage} = state

  const setAlert = (type) => {
    dispatch({
      type: SET_ALERT,
      payload: type
    })
  }

  const setSuccessMessage = (boolean) => {
    dispatch({
      type: SET_SUCCESS_MESSAGE,
      payload: boolean
    })
  }

  return (
    <AlertContext.Provider
      value={{
        alert,
        setAlert,
        successMessage,
        setSuccessMessage
      }}
    >
      {children}
    </AlertContext.Provider>
  )
}
