import {useContext, useEffect} from 'react'
import Filter from '../../components/Filter/Filter'
import LessonsList from '../../components/LessonsList/LessonsList'
import MonthSwitcher from '../../components/MonthSwitcher/MonthSwitcher'
import Loader from '../../components/UI/Loader/Loader'
import AuthContext from '../../context/auth/authContext'
import LessonsContext from '../../context/lessons/lessonsContext'
import classes from './Lessons.module.css'

export default function Lessons() {
  const {user, isLoggedIn} = useContext(AuthContext)
  const {
    getLessons,
    getFilials,
    getGroups,
    getStudents,
    setAppLoading,
    loading,
    error,
    setAdditionalLoading
  } = useContext(LessonsContext)

  useEffect(async () => {
    setAppLoading(true)
    await getLessons()
    await getFilials()
    await getGroups()
    setAdditionalLoading(true)
    setTimeout(async () => {
      await getStudents()
      setAdditionalLoading(false)
    }, 1000)
    setAppLoading(false)
  }, [isLoggedIn])

  // TODO: create a error component
  if (error) return <h1>Error...</h1>
  if (loading) return <Loader onCenter />

  return (
    <>
      <h1 className={classes.title}>{user.name}</h1>
      <Filter />
      <MonthSwitcher />
      <LessonsList />
    </>
  )
}
