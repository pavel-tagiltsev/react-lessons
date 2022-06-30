import Api from './Api'

export default {
  getLessons: (params) => Api.get('/moy-klass/lessons', {params}),
  getStudents: () => Api.get('/moy-klass/students'),
  getFilials: () => Api.get('/moy-klass/filials'),
  getGroups: () => Api.get('/moy-klass/groups')
}
