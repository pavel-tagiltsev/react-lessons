import classes from './Filter.module.css'

export default function Filter() {
  return (
	<div className={classes.filter}>
		<button className={classes.active}>Все</button>
		<button>Прошлые</button>
		<button>Будущие</button>
	</div>
  )
}
