import LoadingButton from '../UI/LoadingButton/LoadingButton'

export default function LessonStatus({lesson, onStatusButtonClick}) {
  return (
    <>
      <h3>Статус урока:</h3>
      <LoadingButton
        text="Состоялся"
        appearence="success"
        disabled={!!lesson.status}
        onClick={onStatusButtonClick}
      />
      <LoadingButton
        text="Не состоялся"
        appearence="error"
        disabled={!lesson.status}
        onClick={onStatusButtonClick}
      />
    </>
  )
}
