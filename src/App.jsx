import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setUser } from './redux/actions'
import { Routes, Route } from 'react-router-dom'
import { onAuthStateChanged } from './config/firebase'

import Login from './pages/Login'
import Chat from './pages/Chat'
import NotFound from './pages/NotFound'

function App () {
  const dispatch = useDispatch()

  useEffect(() => {
    onAuthStateChanged(user => dispatch(setUser(user)))
  }, [])

  return (
    <>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/chat' element={<Chat />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
