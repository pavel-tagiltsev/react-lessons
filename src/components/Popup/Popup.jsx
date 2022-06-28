import {useContext, useEffect, useState} from 'react'
import {useStateIfMounted} from 'use-state-if-mounted'
import {Transition} from 'react-transition-group'

import {changeElemInArray, changeRecords} from '../../utils/utils'
import post from '../../fetch/post'

import LessonsContext from '../../context/lessons/lessonsContext'
import AlertContext from '../../context/alert/alertContext'
import PopupContext from '../../context/popup/popupContext'

import LessonStatus from '../LessonStatus/LessonStatus'
import RecordsStatus from '../RecordsStatus/RecordsStatus'
import CrossButton from '../UI/CrossButton/CrossButton'
import Loader from '../UI/Loader/Loader'
import ExitSvg from '../Svg/ExitSvg/ExitSvg'

import classes from './Popup.module.css'

export default function Popup({state}) {
  const [isChangingStatus, setIsChangingStatus] = useStateIfMounted(false)
  const [isStatused, setIsStatused] = useState(false)
  const [lesson, setLesson] = useState(null)

  const {setAlert, setSuccessMessage} = useContext(AlertContext)
  const {hidePopup, lessonId} = useContext(PopupContext)
  const {lessons, changeLessons, isAdditionalLoading} =
    useContext(LessonsContext)

  useEffect(() => {
    const currentLesson = lessons.find((ls) => ls.id === lessonId)
    const isCurrentLessonStatused = currentLesson.status === 1

    setLesson(currentLesson)
    setIsStatused(isCurrentLessonStatused)

    if (!currentLesson.status) {
      setIsChangingStatus(true)
    }
  }, [lessons])

  const onStatusButtonClick =
    (setIsChangingStatusCallback) => async (setIsLoading) => {
      const isVisitsExists = lesson.records.find(
        (record) => record.visit === true
      )

      if (isVisitsExists) {
        setAlert('')
        setAlert('Для изменения статуса урока  необходимо отменить все записи')
        return
      }

      setIsLoading(true)

      const body = {status: lesson.status ? 0 : 1}

      const onError = () => {
        setAlert('')
        setAlert('Произошла ошибка. Попробуйте повторить позже.')
        setIsLoading(false)
      }

      const onSuccess = () => {
        setIsLoading(false)
        setSuccessMessage(true)

        const updatedLesson = {...lesson, status: lesson.status ? 0 : 1}
        const updatedLessons = changeElemInArray(lessons, lesson, updatedLesson)

        changeLessons(updatedLessons)
        setIsChangingStatusCallback(false)
      }

      await post({
        body,
        onError,
        onSuccess,
        urlExtension: `/api/moy-klass/lessons/${lessonId}/status`
      })
    }

  const onRecordButtonClick = (clickedRecord) => async (setIsLoading) => {
    setIsLoading(true)

    const body = {visit: !clickedRecord.visit}

    const onError = (error) => {
      setAlert('')
      setAlert('Произошла ошибка. Попробуйте повторить позже.')
      setIsLoading(false)
      console.log(error)
    }

    const onSuccess = () => {
      setIsLoading(false)
      setSuccessMessage(true)

      const records = changeRecords(lesson, clickedRecord)
      const updatedLesson = {...lesson, records}
      const updatedLessons = changeElemInArray(lessons, lesson, updatedLesson)

      changeLessons(updatedLessons)
    }

    await post({
      body,
      onError,
      onSuccess,
      urlExtension: `/api/moy-klass/lessonRecords/${clickedRecord.id}`
    })
  }

  const onChangeStatusClick = (boolean) => {
    setIsChangingStatus(boolean)
  }

  function renderContent() {
    if (isAdditionalLoading) {
      return <Loader />
    }

    if (lesson) {
      if (!isStatused || isChangingStatus) {
        return (
          <LessonStatus
            lesson={lesson}
            onStatusButtonClick={onStatusButtonClick(setIsChangingStatus)}
          />
        )
      }

      return (
        <RecordsStatus
          lesson={lesson}
          onRecordButtonClick={onRecordButtonClick}
        />
      )
    }

    return null
  }

  const popupClasses = [classes.popup, classes[state]]

  return (
    <div className={popupClasses.join(' ')}>
      {!isAdditionalLoading && isStatused && (
        <Transition in={isChangingStatus} timeout={300}>
          {(animationState) => {
            const buttonClasses = [classes.exitButton, classes[animationState]]

            return (
              <button
                className={buttonClasses.join(' ')}
                onClick={() => onChangeStatusClick(!isChangingStatus)}
                type="button"
              >
                <ExitSvg />
              </button>
            )
          }}
        </Transition>
      )}

      <CrossButton
        outerPosition={classes.closeButtonPosition}
        onClick={hidePopup}
      />
      {renderContent()}
    </div>
  )
}
