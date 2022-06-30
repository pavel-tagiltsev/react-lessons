/* eslint-disable no-useless-catch */
import Api from './Api'

export default {
  login: async (data) => {
    try {
      const result = await Api.post('/auth/singin', data)
      const {accessToken, ...userInfo} = result.data

      localStorage.user = JSON.stringify(userInfo)
      localStorage.accessToken = accessToken

      return result
    } catch (e) {
      console.error(e)
      return e
    }
  }
}
