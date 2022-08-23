import {useContext} from 'react'
import AuthContext from '../../context/auth/authContext'
import Button from '../../components/UI/Button/Button'
import Input from '../../components/UI/Input/Input'
import classes from './Auth.module.css'
import {useForm} from 'react-hook-form'
import {yupResolver} from '@hookform/resolvers/yup'
import * as yup from 'yup'

yup.setLocale({
  mixed: {
    required: 'Обязательное поле'
  },
  string: {
    email: 'Введите корректный адрес',
    matches: 'Не должен содеражить пробелов',
    min: 'Минимальная длина ${min} символов',
    max: 'Максимальная длина ${max} символов'
  }
})

const schema = yup
  .object()
  .shape({
    email: yup.string().email().lowercase().trim().required(),
    password: yup.string().min(6).max(16).matches(/^\S*$/).required()
  })
  .required()

export default function Auth() {
  const {login} = useContext(AuthContext)

  const {
    watch,
    register,
    handleSubmit,
    formState: {errors}
  } = useForm({
    resolver: yupResolver(schema)
  })

  const onFormSubmit = async (data) => {
    await login(data)
  }

  return (
    <div className={classes.wrapper}>
      <form onSubmit={handleSubmit(onFormSubmit)} autoComplete="on">
        <Input
          className="sfasdfasd"
          label="Почта"
          type="text"
          isFilled={Boolean(watch('email'))}
          errorMessage={errors.email?.message}
          {...register('email')}
        />
        <Input
          label="Пароль"
          type="password"
          isFilled={Boolean(watch('password'))}
          errorMessage={errors.password?.message}
          {...register('password')}
        />
        <Button type="submit">Войти</Button>
      </form>
    </div>
  )
}
