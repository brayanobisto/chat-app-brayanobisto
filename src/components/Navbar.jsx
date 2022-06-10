import { logout } from '../config/firebase'
import { useNavigate } from 'react-router-dom'

function Navbar ({ user }) {
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
      .then(() => navigate('/', { replace: true }))
      .catch(error => console.log(error))
  }

  return (
    <header className='flex items-center justify-between p-4 bg-slate-800'>
      <span className='text-xl font-bold text-white'>{user.fullName}</span>
      <button onClick={handleLogout} className='px-4 py-2 text-xl bg-white'>Logout</button>
    </header>
  )
}

export default Navbar
