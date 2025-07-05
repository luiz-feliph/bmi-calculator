type ButtonProps = {
  calculate: () => void;
}

function Button({calculate}: ButtonProps) {
  return(
    <div className="mt-8 self-center w-full">
      <button
        className="text-base px-3 py-2 bg-blue-400 text-white font-bold rounded-md duration-300 cursor-pointer min-w-full
        hover:bg-blue-300 hover:text-gray-100
        sm:text-xl
        md:text-2xl
        xl:text-3xl
        " 
        onClick={calculate}
      >
        Calculate
      </button>
    </div>
  )
}

export default Button