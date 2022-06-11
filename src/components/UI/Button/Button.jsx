import classes from './Button.module.css'

export default function Button({
  onClick,
  appearence,
  disabled = false,
  loading,
  children,
  type = 'button'
}) {
  const cls = [classes.button]

  if (appearence === 'success') cls.push(classes.success)
  if (appearence === 'error') cls.push(classes.error)

  if (loading) cls.push(classes.loading)

  return (
    <button
      type={type}
      className={cls.join(' ')}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  )
}
