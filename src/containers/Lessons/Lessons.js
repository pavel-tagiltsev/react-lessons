import Filter from '../../components/Filter/Filter'
import LessonsList from '../../components/LessonsList/LessonsList'
import MonthSwitcher from '../../components/MonthSwitcher/MonthSwitcher'
import classes from './Lessons.module.css'

export default function Lessons() {
  return (
    <div className={classes.wrapper}>
      <h1>Данилова Жанна</h1>
      <Filter />
      <MonthSwitcher />
      <LessonsList />
    </div>
  )
}
