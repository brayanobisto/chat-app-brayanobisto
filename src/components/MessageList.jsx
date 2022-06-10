import { useEffect, useRef } from 'react'
import { useSelector } from 'react-redux'
import Message from './Message'

function MessageList ({ user }) {
  const messages = useSelector(state => state.messages)
  const messagesEndRef = useRef(null)

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  if (messages.length === 0) {
    return (
      <p className='grid flex-1 text-4xl font-bold text-white place-content-center'>
        No messages
      </p>
    )
  }

  return (
    <div className='flex flex-col flex-1 p-8 overflow-y-auto gap-y-4'>
      {messages.map(message => (
        <Message message={message} key={message.id} own={message.user.email === user.email} />
      ))}
      <div ref={messagesEndRef} />
    </div>
  )
}

export default MessageList
