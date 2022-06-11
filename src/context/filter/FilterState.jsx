import {useReducer} from 'react'
import FilterContex from './filterContext'
import filterReducer from './filterReducer'
import {SET_FILTERED_LESSONS, SET_FILTERED_TYPE} from '../types'

export default function FilterState({children}) {
  const initialState = {
    filterType: 'ALL',
    filteredLessons: []
  }
  const [state, dispatch] = useReducer(filterReducer, initialState)

  const setFilteredLessons = (filteredLessons) => {
    dispatch({
      type: SET_FILTERED_LESSONS,
      payload: filteredLessons
    })
  }

  const setFilterType = (filterType) => {
    dispatch({
      type: SET_FILTERED_TYPE,
      payload: filterType
    })
  }

  const {filteredLessons, filterType} = state

  return (
    <FilterContex.Provider
      value={{
        setFilteredLessons,
        filteredLessons,
        setFilterType,
        filterType
      }}
    >
      {children}
    </FilterContex.Provider>
  )
}
