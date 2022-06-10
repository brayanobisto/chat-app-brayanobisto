import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { socket } from '../config/socket'
import { setMessages } from '../redux/actions'
import Navbar from '../components/Navbar'
import MessageList from '../components/MessageList.jsx'
import MessageControl from '../components/MessageControl.jsx'
import Spinner from '../components/Spinner'

function Chat () {
  const user = useSelector(state => state.user)
  const dispatch = useDispatch()

  useEffect(() => {
    socket.emit('join', user)

    socket.on('allMessages', messages => dispatch(setMessages(messages)))
    socket.on('resendMessage', messages => dispatch(setMessages(messages)))

    // return () => socket.disconnect()
  }, [])

  if (user === undefined) return <Spinner />
  if (user === null) return <Navigate to='/' replace />

  return (
    <div className='flex flex-col h-full'>
      <Navbar user={user} />
      <MessageList socket={socket} user={user} />
      <MessageControl socket={socket} />
    </div>
  )
}

export default Chat
