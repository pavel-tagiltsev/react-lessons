import classes from './Input.module.css'

export default function Input({name, label, type, required}) {
  return (
    <div className={classes.form}>
      <input type={type} name={name} placeholder=" " required={required} />
      <label className={classes['label-name']} htmlFor={name}>
        <span className={classes['content-name']}>{label}</span>
      </label>
    </div>
  )
}
