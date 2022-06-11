import classes from './CrossButton.module.css'

export default function CrossButton({onClick, outerPosition = ''}) {
  const cls = [outerPosition, classes.cross]

  return <button className={cls.join(' ')} type="button" onClick={onClick} />
}
