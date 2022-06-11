import {useContext} from 'react'

import LessonsContext from '../../context/lessons/lessonsContext'

import LoadingButton from '../UI/LoadingButton/LoadingButton'

export default function RecordsStatus(props) {
  const {lesson, onRecordButtonClick} = props

  const {students} = useContext(LessonsContext)

  const renderRecords = () => {
    const isRecordsEmpty = lesson.records.length === 0

    if (isRecordsEmpty) {
      return <h3>Записей нет</h3>
    }

    return lesson.records.map((record) => {
      const text = students.find((student) => student.id === record.userId).name

      return (
        <LoadingButton
          key={record.id}
          text={text}
          onClick={onRecordButtonClick(record)}
          appearence={record.visit ? 'success' : 'error'}
        />
      )
    })
  }

  return (
    <>
      <h3>Посещаемость:</h3>
      {renderRecords()}
    </>
  )
}
