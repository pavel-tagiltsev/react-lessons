import CustomScrollbars from '../CustomScrollbars/CustomScrollbars'
import classes from './Backdrop.module.css'

export default function Backdrop({children, onClick}) {
  const onBackdropClick = (evt) => {
    if (evt.target.className === classes.backdro) onClick()
  }

  return (
    <CustomScrollbars theme="dark" style={{height: '100vh'}}>
      <div onClick={onBackdropClick} className={classes.backdrop}>
        {children}
      </div>
    </CustomScrollbars>
  )
}
