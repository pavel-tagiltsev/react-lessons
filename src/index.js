import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter} from 'react-router-dom'
import 'normalize.css'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import LessonsState from './context/lessons/LessonsState'
import LessonsListState from './context/lessonsList/LessonsListState'
import FilterState from './context/filter/FilterState'
import PopupState from './context/popup/PopupState'
import AuthState from './context/auth/AuthState'
import AlertState from './context/alert/AlertState'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AlertState>
        <AuthState>
          <LessonsState>
            <PopupState>
              <FilterState>
                <LessonsListState>
                  <App />
                </LessonsListState>
              </FilterState>
            </PopupState>
          </LessonsState>
        </AuthState>
      </AlertState>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
