import {useReducer, useContext} from 'react'
import AlertContext from '../alert/alertContext'
import AuthContext from './authContext'
import authReducer from './authReducer'
import AuthApi from '../../api/AuthApi'

import {LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT} from '../types'

export default function AuthState({children}) {
  const currentUser = localStorage.user && JSON.parse(localStorage.user)
  const initialState = currentUser
    ? {isLoggedIn: true, user: currentUser}
    : {isLoggedIn: false, user: null}

  const {setAlert} = useContext(AlertContext)
  const [state, dispatch] = useReducer(authReducer, initialState)
  const {user, isLoggedIn} = state

  const login = async (data) => {
    const response = await AuthApi.login(data)

    if (response.status === 200) {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: response.data
      })
      return
    }

    switch (response.response.status) {
      case 401:
        setAlert('')
        setAlert('Неверный логин или пароль.')
        break
      default:
        setAlert('')
        setAlert('Произошла ошибка. Повторите позже.')
    }

    dispatch({
      type: LOGIN_FAIL
    })
  }

  const logout = () => {
    localStorage.removeItem('user')
    localStorage.removeItem('accessToken')
    dispatch({type: LOGOUT})
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
        isLoggedIn
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
