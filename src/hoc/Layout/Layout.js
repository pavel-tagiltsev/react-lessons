// import Popup from '../../components/Popup/Popup'
import classes from './Layout.module.css'

export default function Layout({ children }) {
  return (
	<div className={classes.container}>
		{children}
		{/* <Popup /> */}
	</div>
  )
}
