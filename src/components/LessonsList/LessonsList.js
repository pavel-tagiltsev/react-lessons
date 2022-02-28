import LessonsGroup from '../LessonsGroup/LessonsGroup'
import classes from './LessonsList.module.css'

export default function LessonsList() {
  return (
    <ul className={classes.list}>
      <LessonsGroup />
      <LessonsGroup />
    </ul>
  )
}
