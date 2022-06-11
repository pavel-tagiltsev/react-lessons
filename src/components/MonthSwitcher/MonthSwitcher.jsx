import {useEffect, useState, useContext} from 'react'
import dayjs from 'dayjs'

import {getQueryRange, getMonthName} from '../../utils/utils'
import useDebounce from '../../hooks/useDebounce'

import LessonsListContext from '../../context/lessonsList/lessonsListContext'
import LessonsContext from '../../context/lessons/lessonsContext'
import ArrowButton from '../UI/ArrowButton/ArrowButton'

import classes from './MonthSwitcher.module.css'

const PREVIOUS_MONTH = -1
const NEXT_MONTH = 1
const DEBOUNCE_DELAY = 600

export default function MonthSwitcher() {
  const [currentDate, setCurrentMonth] = useState(null)

  const {getLessons} = useContext(LessonsContext)
  const {setLessonsLoading} = useContext(LessonsListContext)

  const debouncedCurrentDate = useDebounce(currentDate, DEBOUNCE_DELAY)

  const dayjsDate = currentDate || dayjs()

  useEffect(() => {
    if (debouncedCurrentDate) getLessons(getQueryRange(currentDate))
  }, [debouncedCurrentDate])

  const onArrowButtonClick = (num) => {
    setLessonsLoading(true)
    setCurrentMonth(dayjsDate.add(num, 'month'))
  }

  return (
    <div className={classes.switcher}>
      <ArrowButton onClick={() => onArrowButtonClick(PREVIOUS_MONTH)} />
      <h2>{getMonthName(dayjsDate)}</h2>
      <ArrowButton right onClick={() => onArrowButtonClick(NEXT_MONTH)} />
    </div>
  )
}
