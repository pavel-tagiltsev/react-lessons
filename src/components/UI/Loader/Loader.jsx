import classes from './Loader.module.css'

export default function Loader({onCenter = false}) {
  const cls = [classes.loader]

  if (onCenter) cls.push(classes.onCenter)

  return <div className={cls.join(' ')} />
}
