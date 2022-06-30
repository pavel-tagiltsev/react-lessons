import React from 'react'
import classes from './Input.module.css'

const Input = React.forwardRef(
  ({isFilled, errorMessage, label, className, ...attributes}, ref) => {
    const cls = [classes.group]

    isFilled && cls.push(classes.filled)
    errorMessage && cls.push(classes.error)
    className && cls.push(className)

    return (
      <div className={cls.join(' ')}>
        <input className={classes.input} ref={ref} {...attributes} />
        <span className={classes.highlight}></span>
        <span className={classes.bar}></span>
        <label className={classes.label} htmlFor={attributes.name}>
          {label}
        </label>
        <span className={classes.message}>{errorMessage}</span>
      </div>
    )
  }
)

Input.displayName = 'Input'

export default Input
