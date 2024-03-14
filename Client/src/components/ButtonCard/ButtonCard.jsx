const ButtonCard = ({ onClick, children }) => {
  return (
    <button
      onClick={onClick}
      className='font-bold py-2 m-2 px-2 rounded'
    >
      {children}
    </button>
  )
}

export default ButtonCard
