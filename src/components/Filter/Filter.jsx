import {useContext, useEffect} from 'react'

import {getLessonType} from '../../utils/utils'

import FilterContext from '../../context/filter/filterContext'
import LessonsContext from '../../context/lessons/lessonsContext'
import RoundedBtn from '../UI/RoundedBtn/RaundedBtn'

import classes from './Filter.module.css'

const FILTER = {
  ALL: (lessons) => lessons,
  VISITED: (lessons) =>
    lessons.filter((lesson) => getLessonType(lesson) === 'VISITED'),
  UNVISITED: (lessons) =>
    lessons.filter((lesson) => getLessonType(lesson) === 'UNVISITED'),
  UNSTATUSED: (lessons) =>
    lessons.filter((lesson) => getLessonType(lesson) === 'UNSTATUSED')
}

const buttons = [
  {data: 'ALL', text: 'Все'},
  {data: 'VISITED', text: 'Проведенные'},
  {data: 'UNVISITED', text: 'Отмененные'},
  {data: 'UNSTATUSED', text: 'В ожидание'}
]

export default function Filter() {
  const {lessons} = useContext(LessonsContext)
  const {setFilteredLessons, setFilterType, filterType} =
    useContext(FilterContext)

  useEffect(() => {
    if (lessons) {
      const filterLessons = FILTER[filterType]
      setFilteredLessons(filterLessons(lessons))
    }
  }, [filterType, lessons])

  const onFilterButtonClick = (evt) => {
    setFilterType(evt.target.getAttribute('data-type'))
  }

  const renderButtons = () =>
    buttons.map((button) => {
      const {data} = button

      let content = 0

      if (lessons) {
        if (data === 'ALL') {
          content = lessons.length
        } else {
          content = lessons.filter(
            (lesson) => getLessonType(lesson) === data
          ).length
        }
      }

      return (
        <RoundedBtn
          key={data}
          active={data === filterType ? 'active' : ''}
          data-type={data}
          onClick={onFilterButtonClick}
        >
          {content}
        </RoundedBtn>
      )
    })

  return <div className={classes.filter}>{renderButtons()}</div>
}
