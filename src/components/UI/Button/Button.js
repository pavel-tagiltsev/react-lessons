import classes from './Button.module.css'

export default function Button({ appearence, children }) {
  const cls = [classes.button]

  if (appearence === 'success') cls.push(classes.success)
  if (appearence === 'error') cls.push(classes.error)

  return (
    <button className={cls.join(' ')}>{children}</button>
  )
}
