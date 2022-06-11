import {useContext, useEffect} from 'react'
import {Transition} from 'react-transition-group'

import AlertContext from '../../../context/alert/alertContext'

import classes from './SuccessMessage.module.css'

export default function SuccessMessage() {
  const {successMessage, setSuccessMessage} = useContext(AlertContext)
  useEffect(() => {
    setTimeout(() => {
      setSuccessMessage(false)
    }, 500)
  }, [successMessage])

  return (
    <Transition in={!!successMessage} timeout={300} mountOnEnter unmountOnExit>
      {(state) => {
        const cls = [classes.success, classes[state]]

        return <div className={cls.join(' ')}>Сохранено!</div>
      }}
    </Transition>
  )
}
