import {useContext, useEffect, useState} from 'react'

import LessonsContext from '../../context/lessons/lessonsContext'
import PopupContext from '../../context/popup/popupContext'

import {getLessonType} from '../../utils/utils'

import classes from './LessonCard.module.css'

export default function LessonCard({lesson}) {
  const {beginTime, endTime, filialId, classId, id} = lesson

  const [filialName, setFilialName] = useState('')
  const [groupName, setGroupName] = useState('')

  const {filials, groups} = useContext(LessonsContext)
  const {showPopup, setLessonId} = useContext(PopupContext)

  useEffect(() => {
    setFilialName(filials.find((filial) => filialId === filial.id).name)
    setGroupName(groups.find((group) => classId === group.id).name)
  }, [])

  const cls = [classes.card]
  const modifier = getLessonType(lesson).toLocaleLowerCase()
  cls.push(classes[modifier])

  return (
    <li
      className={cls.join(' ')}
      onClick={() => {
        setLessonId(id)
        showPopup()
      }}
    >
      <p>{groupName}</p>
      <p>
        <span>{filialName}</span>
        <span>
          {beginTime} - {endTime}
        </span>
      </p>
    </li>
  )
}
