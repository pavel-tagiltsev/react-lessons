import {useReducer, useContext} from 'react'
import AlertContext from '../alert/alertContext'
import AuthContext from './authContext'
import authReducer from './authReducer'
import post from '../../fetch/post'

import {LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT} from '../types'

export default function AuthState({children}) {
  const currentUser = JSON.parse(localStorage.getItem('user'))
  const initialState = currentUser
    ? {isLoggedIn: true, user: currentUser}
    : {isLoggedIn: false, user: null}

  const {setAlert} = useContext(AlertContext)
  const [state, dispatch] = useReducer(authReducer, initialState)
  const {user, isLoggedIn} = state

  const login = async (data) => {
    const onError = (err) => {
      switch (err.message) {
        case 'Request failed with status code 404':
          setAlert('')
          setAlert('Не найден пользователь!')
          break
        case 'Request failed with status code 401':
          setAlert('')
          setAlert('Неверный пароль!')
          break
        default:
          setAlert('')
      }

      dispatch({
        type: LOGIN_FAIL
      })
    }

    const onSuccess = (res) => {
      if (res.data.accessToken) {
        localStorage.setItem('user', JSON.stringify(res.data))
      }

      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data
      })
    }

    await post({
      body: data,
      onError,
      onSuccess,
      urlExtension: '/api/auth/singin'
    })
  }

  const logout = () => {
    localStorage.removeItem('user')
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
