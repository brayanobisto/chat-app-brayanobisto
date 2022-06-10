import { useSelector } from 'react-redux'

function MessageControl ({ socket }) {
  const user = useSelector(state => state.user)

  const handleSendMessage = (e) => {
    e.preventDefault()
    socket.emit('sendMessage', { content: e.target.message.value, user })
    e.target.reset()
  }

  return (
    <form
      onSubmit={handleSendMessage}
      className='sticky bottom-0 flex items-center p-4 bg-slate-800'
    >
      <input
        autoComplete='off'
        name='message'
        type='text'
        className='w-full p-2 text-xl text-white bg-gray-800 border border-white outline-none'
      />
      <button
        type='submit'
        className='px-4 py-2 text-xl bg-white border border-transparent'
      >Send
      </button>
    </form>
  )
}

export default MessageControl
