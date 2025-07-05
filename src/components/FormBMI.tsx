type Props = {
  height: string;
  weight: string;
  setHeight: (value: string) => void;
  setWeight: (value: string) => void;
}

function FormBMI({height, weight, setHeight, setWeight}: Props) {
  return (
    <div>
      <form className="flex flex-col gap-4 sm:gap-8">
        <input 
        className="text-sm border-b-2 border-gray-300 duration-300 focus:outline-none focus:border-blue-400 p-1 sm:text-base md:text-lg xl:text-xl" 
        type="number" 
        value={height}
        onChange={(e) => setHeight(e.currentTarget.value)}
        placeholder="Enter your height. Ex: 1.5 (in meters)"
        />

        <input 
        className="text-sm border-b-2 border-gray-300 duration-300 focus:outline-none focus:border-blue-400 p-1 sm:text-base md:text-lg xl:text-xl"
        type="number" 
        value={weight}
        onChange={(e) => setWeight(e.currentTarget.value)}
        placeholder="Enter your weight. Ex: 75.3 (in kg)"
        />
      </form>
    </div>
  )
}

export default FormBMI