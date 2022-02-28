import classes from './LessonCard.module.css'

export default function LessonCard({ status }) {
  const cls = [classes.card]

  if (status === 'visited') cls.push(classes.visited)
  if (status === 'unvisited') cls.push(classes.unvisited)
  if (status === 'unstatused') cls.push(classes.unstatused)

  return (
    <li className={cls.join(' ')} tabIndex={0}>
      <p>20304 Kids box 4 (8-9 лет)</p>
      <p>БЦ «Ника» -  14:30 - 15:30 </p>
    </li>
  )
}
