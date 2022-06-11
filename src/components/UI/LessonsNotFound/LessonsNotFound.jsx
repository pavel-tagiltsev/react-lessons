import {useEffect, useContext, useState} from 'react'

import FilterContext from '../../../context/filter/filterContext'

import classes from './LessonsNotFound.module.css'
import img from './no-task.png'

export default function LessonsNotFound() {
  const [text, setText] = useState('')
  const {filterType} = useContext(FilterContext)

  useEffect(() => {
    switch (filterType) {
      case 'ALL':
        setText('уроков')
        break
      case 'VISITED':
        setText('проведенных уроков')
        break
      case 'UNVISITED':
        setText('непроведенных уроков')
        break
      case 'UNSTATUSED':
        setText('уроков в ожидание')
        break
      default:
        setText('уроков')
    }
  }, [filterType])

  return (
    <div className={classes.wrapper}>
      <h3>В этом месяце {text} нет</h3>
      <img src={img} alt="Пустой лист" className={classes.img} />
    </div>
  )
}
