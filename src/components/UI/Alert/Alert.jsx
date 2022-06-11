import {Transition} from 'react-transition-group'
import {useContext} from 'react'

import AlertContext from '../../../context/alert/alertContext'

import CrossButton from '../CrossButton/CrossButton'

import classes from './Alert.module.css'

export default function Alert() {
  const {alert, setAlert} = useContext(AlertContext)

  return (
    <Transition in={!!alert} timeout={300} mountOnEnter unmountOnExit>
      {(state) => {
        const cls = [classes.alert, classes[state]]

        return (
          <div className={cls.join(' ')}>
            <CrossButton
              onClick={() => setAlert('')}
              outerPosition={classes.closeButtonPosition}
            />
            <svg viewBox="0 0 24 24">
              <path d="M12 8L12 13" />
              <line x1="12" y1="16" x2="12" y2="16" />
              <circle cx="12" cy="12" r="10" />
            </svg>
            <p>{alert}</p>
          </div>
        )
      }}
    </Transition>
  )
}
