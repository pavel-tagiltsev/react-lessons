import {useStateIfMounted} from 'use-state-if-mounted'
import {debounce} from '../../../utils/utils'

import Button from '../Button/Button'

export default function LoadingButton(props) {
  const {text, onClick, appearence, disabled} = props

  const [isLoading, setIsLoading] = useStateIfMounted(false)

  const onButtonClick = async () => {
    await onClick(setIsLoading)
  }

  return (
    <Button
      loading={isLoading}
      disabled={disabled}
      appearence={appearence}
      onClick={debounce(onButtonClick, 300)}
    >
      {text}
    </Button>
  )
}
