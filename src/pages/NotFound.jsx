import { Link } from 'react-router-dom'

function NotFound () {
  return (
    <div className='grid h-full place-content-center'>
      <div className='p-4'>
        <h1 className='mb-4 text-center text-white text-7xl'>404</h1>
        <p className='mb-6 text-xl text-center text-white'>Page not found</p>
      </div>
      <Link to='/' className='py-2 text-center bg-white'>
        Go back to home
      </Link>
    </div>
  )
}

export default NotFound
