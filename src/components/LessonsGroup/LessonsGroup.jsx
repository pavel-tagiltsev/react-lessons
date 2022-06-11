import {useContext, useState, useEffect} from 'react'
import dayjs from 'dayjs'

import FilterContex from '../../context/filter/filterContext'
import LessonCard from '../LessonCard/LessonCard'

import classes from './LessonsGroup.module.css'

export default function LessonsGroup({date}) {
  const [dateLessons, setDateLessons] = useState([])

  const {filteredLessons} = useContext(FilterContex)

  useEffect(() => {
    setDateLessons(
      filteredLessons
        .filter((lesson) => lesson.date === date)
        .sort((a, b) => {
          const timeA = `${a.date} ${a.beginTime}`
          const timeB = `${b.date} ${b.beginTime}`
          return new Date(timeB) - new Date(timeA)
        })
    )
  }, [filteredLessons])

  return (
    <li>
      <h3 className={classes.title}>{dayjs(date).format('DD.MM.YYYY')}</h3>
      <ul className={classes.group}>
        {dateLessons.map((lesson) => (
          <LessonCard key={lesson.id} lesson={lesson} />
        ))}
      </ul>
    </li>
  )
}
