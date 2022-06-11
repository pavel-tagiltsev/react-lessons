import {useContext} from 'react'
import {Routes, Route, Navigate} from 'react-router-dom'
import AuthContext from './context/auth/authContext'
import Layout from './layout/Layout'
import Auth from './pages/Auth/Auth'
import Lessons from './pages/Lessons/Lessons'

export default function App() {
  const {isLoggedIn} = useContext(AuthContext)

  let routes = (
    <>
      <Route path="/login" element={<Auth />} />
      <Route path="*" element={<Navigate to="/login" />} />
    </>
  )

  if (isLoggedIn) {
    routes = (
      <>
        <Route path="/lessons" element={<Lessons />} />
        <Route path="*" element={<Navigate to="/lessons" />} />
      </>
    )
  }

  return (
    <Layout>
      <Routes>{routes}</Routes>
    </Layout>
  )
}
