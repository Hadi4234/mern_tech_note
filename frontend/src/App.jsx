import {Routes,Route} from 'react-router-dom'
import Layout from './components/Layout'
import Public from './components/Public'
import DashLayout from './components/DashLayout'
import Login from './features/auth/Login'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout/>}>
         <Route index element={<Public/>}/>
          <Route path="login" element={<Login/>}/>
          <Route path="dash" element={<DashLayout/>}>
               <Route index element={<Welcome />} />

<Route path="notes">
  <Route index element={<NotesList />} />
</Route>

<Route path="users">
  <Route index element={<UsersList />} />
</Route>

        </Route>
      </Route>
    </Routes>
  )
}

export default App
