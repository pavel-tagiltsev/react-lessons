import axios from 'axios'

const NONAUTH_ROUTES = ['/login']

axios.defaults.headers.common.Accept = 'application/json'

const ApiInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  timeout: 30000,
  maxBodyLength: Infinity,
  maxContentLength: Infinity
})

ApiInstance.interceptors.request.use(
  (config) => {
    const {accessToken} = localStorage
    config.headers['x-access-token'] = accessToken
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

ApiInstance.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    const {status} = error.response

    if (
      (status === 401 || status === 403) &&
      !NONAUTH_ROUTES.includes(window.location.pathname)
    ) {
      localStorage.removeItem('user')
      localStorage.removeItem('accessToken')
      window.location = `http://localhost:3000/login?redirect=${window.location.pathname}`
    }
    return Promise.reject(error)
  }
)

export default ApiInstance
