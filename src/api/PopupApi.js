import Api from './Api'

export default {
  changeLessonsStatus: async (id, body) => {
    try {
      const result = await Api.post(`/moy-klass/lessons/${id}/status`, body)
      return result
    } catch (e) {
      console.error(e)
      return e
    }
  },
  changeRecordStatus: async (id, body) => {
    try {
      const result = await Api.post(`/moy-klass/lessonRecords/${id}`, body)
      return result
    } catch (e) {
      console.error(e)
      return e
    }
  }
}
