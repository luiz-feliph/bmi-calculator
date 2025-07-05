type CardProps = {
  img: string,
  title: string,
  desc: string,
  bgColor: string,
  bmi?: number | undefined
  checker: boolean
  className?: string
}

function Card({img, title, desc, bgColor, bmi, checker, className}: CardProps) {
  return (
    <div className={`${className} flex justify-center items-center flex-col bg-${bgColor}-600 w-auto h-full rounded-lg`}>
      <div className={`flex justify-center items-center bg-${bgColor}-700/50 bg-opacity-50 w-[52.5px] h-[52.5px] rounded-full mb-1
      sm:w-[80px] sm:h-[80px] sm:mb-3
      md:w-[140px] md:h-[140px] md:mb-3
      lg:w-[80px] lg:h-[80px] lg:mb-3
      `}>
        <img className="w-[22.5px] h-[22.5px] sm:w-[40px] sm:h-[40px] md:w-[60px] md:h-[60px] lg:w-[40px] lg:h-[40px]" src={img} alt="Thumbs-up or Thumbs-down Icon" width={40} height={40}/>
      </div>
      <h2 className="text-white text-xl font-bold mb-2 sm:text-2xl sm:mb-3 md:text-3xl md:mb-4 lg:text-2xl lg:mb-2">{title}</h2>
      <p className={`${checker && className !== "hidden" ? "" : "hidden"} text-white text-sm text-center font-semibold mb-2 sm:text-base sm:mb-4 md:text-lg md:mb-6`}>Your BMI is {bmi} kg/m<sup>2</sup></p>
      <p className="text-white text-[0.7rem] text-center px-2 sm:text-sm md:text-base lg:text-xs">{desc}</p>
    </div>
  )
}

export default Card