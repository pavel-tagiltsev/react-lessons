import {useContext} from 'react'
import AuthContext from '../../context/auth/authContext'
import Button from '../../components/UI/Button/Button'
import Input from '../../components/UI/Input/Input'
import classes from './Auth.module.css'

export default function Auth() {
  const {login} = useContext(AuthContext)

  const onFormSubmit = (evt) => {
    evt.preventDefault()
    const formData = new FormData(evt.target)

    const object = {}
    formData.forEach((value, key) => {
      object[key] = value
    })

    login(object.email, object.password)
  }

  return (
    <div className={classes.wrapper}>
      <form onSubmit={onFormSubmit} autoComplete="off">
        <Input name="email" label="Почта" type="email" required />
        <Input name="password" label="Пароль" type="password" required />
        <Button type="submit">Войти</Button>
      </form>
    </div>
  )
}
