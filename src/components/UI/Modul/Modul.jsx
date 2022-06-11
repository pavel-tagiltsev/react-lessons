import {useContext} from 'react'
import {Transition} from 'react-transition-group'

import PopupContext from '../../../context/popup/popupContext'

import Backdrop from '../Backdrop/Backdrop'
import Popup from '../../Popup/Popup'

import classes from './Modul.module.css'

export default function Module() {
  const {isShowed, hidePopup} = useContext(PopupContext)

  return (
    <Transition in={isShowed} timeout={300} mountOnEnter unmountOnExit>
      {(state) => {
        const cls = [classes.modul, classes[state]]

        return (
          <div className={cls.join(' ')}>
            <Backdrop onClick={hidePopup}>
              <Popup state={state} />
            </Backdrop>
          </div>
        )
      }}
    </Transition>
  )
}
