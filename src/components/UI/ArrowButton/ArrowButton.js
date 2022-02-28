import classes from './ArrowButton.module.css'

export default function ArrowButton({ right }) {
  const cls = [classes.arrow]

  if (right) cls.push(classes.right)

  return (
		<button
			className={cls.join(' ')}
			type="button"
		>
			<svg
				viewBox="0 0 20 20"
				fill="white"
			>
				<path d="M15.6341 0.292307V0.292307C15.2292 -0.0974368 14.5737 -0.0974368 14.1698 0.292307L5.60659 8.55587C4.7978 9.33636 4.7978 10.6025 5.60659 11.383L14.232 19.7075C14.6327 20.0933 15.28 20.0983 15.6859 19.7175V19.7175C16.1002 19.3288 16.1053 18.6882 15.6973 18.2935L7.80307 10.6765C7.39815 10.2857 7.39815 9.65315 7.80307 9.26241L15.6341 1.70538C16.0391 1.31563 16.0391 0.682051 15.6341 0.292307"/>
			</svg>
		</button>
  )
}
