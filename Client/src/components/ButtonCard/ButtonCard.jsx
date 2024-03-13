const ButtonCard = ({ onClick, children, color }) => {
  return (
    <button
      onClick={onClick}
      className={`bg-${color}-500 hover:bg-${color}-600 text-black font-bold py-2 m-4 px-4 rounded`}
    >
      {children}
    </button>
  )
}

export default ButtonCard
