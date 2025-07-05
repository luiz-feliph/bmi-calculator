import arrowUp from "../assets/arrow-up.svg"
import arrowLeft from "../assets/arrow-left.svg"

type RepeatBtnProps = {
  checker: boolean,
  setChecker: (value: boolean) => void
  setHeight: (value: string) => void;
  setWeight: (value: string) => void;
  className: string
  cardsGrid: HTMLElement
}

function RepeatBtn({checker, setChecker, setHeight, setWeight, className, cardsGrid}: RepeatBtnProps) {

  const changeChecker = () => {
    setChecker(!checker)
    cardsGrid.classList.add("grid", "grid-cols-2", "grid-rows-2", "gap-5"); // Restore the grid that was previously removed, restarting the cycle.
    setHeight('')
    setWeight('')
  }

  return (
    <div onClick={changeChecker} className={`${className} flex justify-center items-center absolute w-[50px] h-[50px] rounded-full bg-blue-500 top-[-25px] cursor-pointer place-self-center duration-300
    hover:bg-blue-400
    sm:w-[80px] sm:h-[80px] sm:top-[-40px]
    lg:w-[60px] lg:h-[60px] lg:place-self-start lg:top-1/2 lg:transform lg:-translate-x-1/2 lg:-translate-y-1/2
    `}>
      <img src={window.innerWidth < 1024 ? arrowUp : arrowLeft} className="sm:w-[40px] sm:h-[40px] lg:w-[30px] lg:h-[30px]" alt="Arrow icon" width={40} height={40}/>
    </div>
  )
}

export default RepeatBtn