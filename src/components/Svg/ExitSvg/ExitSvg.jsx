import classes from './ExitSvg.module.css'

export default function ExitSvg() {
  return (
    <svg className={classes.exit} viewBox="0 0 512 512">
      <path d="M320,176V136a40,40,0,0,0-40-40H88a40,40,0,0,0-40,40V376a40,40,0,0,0,40,40H280a40,40,0,0,0,40-40V336" />
      <polyline points="384 176 464 256 384 336" />
      <line x1="191" y1="256" x2="464" y2="256" />
    </svg>
  )
}
