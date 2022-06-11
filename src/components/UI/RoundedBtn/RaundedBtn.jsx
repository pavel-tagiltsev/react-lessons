import classes from './RaundedBtn.module.css'

export default function RoundedBtn(props) {
  const {active, children} = props

  const cls = [classes.button]

  if (active) cls.push(classes.active)

  return (
    <button {...props} type="button" className={cls.join(' ')}>
      {children}
    </button>
  )
}
