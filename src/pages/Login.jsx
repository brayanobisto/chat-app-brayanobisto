import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { loginWithGoogle } from '../config/firebase'
import Spinner from '../components/Spinner'

function Login () {
  const user = useSelector(state => state.user)

  const handleLogin = () => {
    loginWithGoogle().catch(error => console.log(error))
  }

  if (user === undefined) return <Spinner />
  if (user !== null) return <Navigate to='/chat' replace />

  return (
    <div className='grid h-full font-bold place-content-center'>
      <div className='p-4 bg-gray-800'>
        <h1 className='mb-4 text-5xl text-white'>Welcome to Chat App</h1>
        <p className='mb-6 text-xl text-white'>Chat with anyone anywhere in the world</p>
        <button
          type='button' onClick={handleLogin}
          className='px-4 py-2 text-xl bg-white'
        >Login with Google
        </button>
      </div>
    </div>
  )
}

export default Login
