import axios from 'axios'
import {API_BASE} from './base'

const get = async (functionParams) => {
  const {params = {}, onError, onSuccess, urlExtension} = functionParams

  await axios
    .get(`${API_BASE}${urlExtension}`, {params})
    .then((res) => {
      onSuccess(res)
    })
    .catch(onError)
}

export default get
