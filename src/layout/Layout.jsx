import {useContext} from 'react'

import LessonsContext from '../context/lessons/lessonsContext'
import AuthContext from '../context/auth/authContext'

import CustomScrollbars from '../components/UI/CustomScrollbars/CustomScrollbars'
import Header from '../components/Header/Header'
import SuccessMessage from '../components/UI/SuccessMessage/SuccessMessage'
import Module from '../components/UI/Modul/Modul'
import Alert from '../components/UI/Alert/Alert'

import classes from './Layout.module.css'
import {useEffect} from 'react'
import {useState} from 'react'

export default function Layout({children}) {
  const {isLoggedIn} = useContext(AuthContext)
  const {loading} = useContext(LessonsContext)
  const [isSafari, setIsSafari] = useState(null)

  useEffect(() => {
    setIsSafari(/^((?!chrome|android).)*safari/i.test(navigator.userAgent))
  }, [])

  let layout = null

  if (isSafari) {
    layout = (
      <div className={classes.container}>
        {isLoggedIn && !loading && <Header />}
        <Alert />
        <Module />
        <SuccessMessage />
        {children}
      </div>
    )
  } else {
    layout = (
      <CustomScrollbars theme="light" style={{height: '100vh'}}>
        <div className={classes.container}>
          {isLoggedIn && !loading && <Header />}
          <Alert />
          <Module />
          <SuccessMessage />
          {children}
        </div>
      </CustomScrollbars>
    )
  }

  return layout
}
