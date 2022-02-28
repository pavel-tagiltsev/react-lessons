import Button from '../../components/UI/Button/Button'
import Input from '../../components/UI/Input/Input'
import classes from './Auth.module.css'

export default function Auth() {
  return (
	<div className={classes.wrapper}>
		<form>
			<Input name='email' label='Почта'/>
			<Input name='password' label='Пароль'/>
			<Button>Войти</Button>
		</form>
	</div>
  )
}
