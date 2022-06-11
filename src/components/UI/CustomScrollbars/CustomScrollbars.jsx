import {Scrollbars} from 'react-custom-scrollbars'

import classes from './CustomScrollbars.module.css'

export default function CustomScrollbars({children, theme, ...rest}) {
  const clsThumb = [classes.thumb]

  if (theme === 'dark') {
    clsThumb.push(classes['thumb-dark'])
  }

  if (theme === 'light') {
    clsThumb.push(classes['thumb-light'])
  }

  const renderThumb = (props) => (
    <div {...props} className={clsThumb.join(' ')} />
  )

  const renderTrack = (props) => <div {...props} className={classes.track} />

  return (
    <Scrollbars
      renderThumbHorizontal={renderThumb}
      renderThumbVertical={renderThumb}
      renderTrackHorizontal={renderTrack}
      renderTrackVertical={renderTrack}
      {...rest}
    >
      {children}
    </Scrollbars>
  )
}
