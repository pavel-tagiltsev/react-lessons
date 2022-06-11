import axios from 'axios'
import {API_BASE} from './base'

const post = async (params) => {
  const {body, onError, onSuccess, urlExtension} = params

  await axios
    .post(`${API_BASE}${urlExtension}`, body)
    .then((res) => {
      if (res.status !== 200) {
        onError()
        return
      }
      onSuccess(res)
    })
    .catch(onError)
}

export default post
