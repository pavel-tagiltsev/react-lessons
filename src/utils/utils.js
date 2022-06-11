import 'dayjs/locale/ru'

import dayjs from 'dayjs'

export const capitalizeFirstLetter = (string) =>
  string.charAt(0).toUpperCase() + string.slice(1)

export const getQueryRange = (dayjsDate = dayjs()) => [
  dayjsDate.startOf('month').format('YYYY-MM-DD'),
  dayjsDate.endOf('month').format('YYYY-MM-DD')
]

export const getMonthName = (dayjsDate) =>
  capitalizeFirstLetter(dayjsDate.locale('ru').format('MMMM'))

export const getLessonType = (lesson) => {
  const {status, records, date, endTime} = lesson
  const isVisited = records.find((record) => record.visit)
  const isEmpty = records.length === 0
  const isPassed = dayjs(`${date} ${endTime}`) <= dayjs()

  let modifier = ''

  if (status) modifier = 'VISITED'
  if (status && !isVisited && !isEmpty) modifier = 'UNVISITED'
  if (!status && !isVisited && isPassed) modifier = 'UNSTATUSED'

  return modifier
}

export const changeElemInArray = (arr, elem, updatedElem) => {
  const index = arr.indexOf(elem)
  const start = arr.slice(0, index)
  const end = arr.slice(index + 1)
  return [...start, updatedElem, ...end]
}

export const changeRecords = (lesson, clickedRecord) =>
  lesson.records.map((record) => {
    if (record.id === clickedRecord.id) {
      record.visit = !clickedRecord.visit
    }
    return record
  })

export const debounce = (callback, delay) => {
  let timeout
  return function () {
    clearTimeout(timeout)
    timeout = setTimeout(callback, delay)
  }
}
