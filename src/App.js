import Layout from './hoc/Layout/Layout'
// import Auth from './containers/Auth/Auth'
import Lessons from './containers/Lessons/Lessons'

export default function App() {
  return (
    <Layout>
      {/* <Auth /> */}
      <Lessons />
    </Layout>
  )
}
