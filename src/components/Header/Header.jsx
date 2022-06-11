import {useContext} from 'react'

import LessonsContext from '../../context/lessons/lessonsContext'
import AuthContext from '../../context/auth/authContext'

import RoundedBtn from '../UI/RoundedBtn/RaundedBtn'
import ExitSvg from '../Svg/ExitSvg/ExitSvg'

import classes from './Header.module.css'

export default function Header() {
  const {setAppLoading} = useContext(LessonsContext)
  const {logout} = useContext(AuthContext)

  const onLogoutButtonClick = () => {
    setAppLoading(true)
    logout()
  }

  return (
    <div className={classes.header}>
      <RoundedBtn onClick={onLogoutButtonClick}>
        <ExitSvg />
      </RoundedBtn>
    </div>
  )
}
