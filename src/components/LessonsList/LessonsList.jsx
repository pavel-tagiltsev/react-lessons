import {useContext, useEffect, useState} from 'react'

import LessonsListContext from '../../context/lessonsList/lessonsListContext'
import FilterContex from '../../context/filter/filterContext'

import LessonsGroup from '../LessonsGroup/LessonsGroup'
import LessonsNotFound from '../UI/LessonsNotFound/LessonsNotFound'
import Loader from '../UI/Loader/Loader'

import classes from './LessonsList.module.css'

export default function LessonsList() {
  const [dates, setDates] = useState([])

  const {filteredLessons} = useContext(FilterContex)
  const {setLessonsLoading, isLoading} = useContext(LessonsListContext)

  useEffect(() => {
    const filteredDates = filteredLessons.map((lesson) => lesson.date)
    const uniqueDates = Array.from(new Set(filteredDates))
    const sortedDates = uniqueDates.sort((a, b) => new Date(b) - new Date(a))
    setDates(sortedDates)
    setLessonsLoading(false)
  }, [filteredLessons])

  if (isLoading) return <Loader />
  // TODO: make a empty list component
  if (filteredLessons.length === 0) return <LessonsNotFound />

  return (
    <ul className={classes.list}>
      {dates.map((date) => (
        <LessonsGroup key={date} date={date} />
      ))}
    </ul>
  )
}
