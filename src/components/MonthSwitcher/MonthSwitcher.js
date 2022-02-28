import ArrowButton from '../UI/ArrowButton/ArrowButton'
import classes from './MonthSwitcher.module.css'

export default function MonthSwitcher() {
  return (
		<div className={classes.switcher}>
			<ArrowButton />
			<h2>Февраль</h2>
			<ArrowButton right={true} />
		</div>
  )
}
