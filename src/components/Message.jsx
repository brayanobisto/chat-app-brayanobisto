function Message ({ message, own }) {
  return (
    <div className={own ? 'flex flex-row-reverse text-black gap-x-2' : 'flex text-black gap-x-2'}>
      <div className='hidden shrink-0 bg-slate-900 sm:inline-flex sm:flex-col'>
        <img
          src={message.user.avatar} alt={message.user.fullName}
          className='w-12 h-12 rounded-full'
        />
      </div>
      <div className={own ? 'inline-block p-4 max-w-full sm:max-w-[calc(100%-3.5rem)] bg-slate-500' : 'inline-block p-4 max-w-full sm:max-w-[calc(100%-3.5rem)] bg-white'}>
        {!own &&
          <span className={own ? 'block font-mono font-bold text-white' : 'block font-mono font-bold break-words'}>{`${message.user.fullName} - ${message.user.email}`}</span>}
        <div className={own ? 'text-xl break-words text-white' : 'text-xl break-words'}>
          {message.content}
        </div>
      </div>
    </div>
  )
}

export default Message
