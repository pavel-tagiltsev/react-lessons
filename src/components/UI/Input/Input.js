import classes from './Input.module.css'

export default function Input({ name, label }) {
  return (
  <div className={classes.form}>
    <input type='text' name={name} autoComplete="off" required />
    <label
      className={classes['label-name']}
      htmlFor={name}
    >
      <span className={classes['content-name']}>{label}</span>
    </label>
  </div>
  )
}
