import LessonCard from '../LessonCard/LessonCard'
import classes from './LessonsGroup.module.css'

export default function LessonsGroup() {
  return (
    <li>
      <h3 className={classes.title}>06.02.2022</h3>
      <ul className={classes.group}>
        <LessonCard />
        <LessonCard status='unstatused'/>
        <LessonCard status='visited'/>
        <LessonCard status='unvisited'/>
      </ul>
    </li>
  )
}
