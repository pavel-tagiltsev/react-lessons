import Button from '../UI/Button/Button'
import CrossButton from '../UI/CrossButton/CrossButton'
import Backdrop from '../UI/Backdrop/Backdrop'
import classes from './Popup.module.css'

export default function Popup() {
  return (
    <>
      <div className={classes.popup}>
        <CrossButton />
        <h3>Посещаемость:</h3>
        <Button appearence='success'>Вася Пупки</Button>
        <Button appearence='error'>Петя Дуликов</Button>
        <Button appearence='success'>Иван Дуликов</Button>
        <Button appearence='success'>Стас Дуликов</Button>
      </div>
      <Backdrop />
    </>
  )
}
