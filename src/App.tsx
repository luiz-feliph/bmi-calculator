import { useState } from "react";
import FormBMI from "./components/FormBMI";
import Header from "./components/Header";
import Text from "./components/Text";
import Button from "./components/Button";
import Card from "./components/Card";
import RepeatBtn from "./components/RepeatBtn";
import thumbsUp from "./assets/thumbs-up.svg";
import thumbsDown from "./assets/thumbs-down.svg";

function App() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBmi] = useState<number>();
  const [checker, setChecker] = useState<boolean>(false);
  const cardsGrid = document.querySelector(".cards-grid") as HTMLElement;

  const calculate = () => {
    let heightNum: number = parseFloat(height),
      weightNum: number = parseFloat(weight);

    if (isNaN(heightNum) || isNaN(weightNum)) return alert("Error");
    else {
      const result = weightNum / (heightNum * heightNum);
      setBmi(parseFloat(result.toFixed(2)));
      setChecker(true); // Check if the "Calculate" button was pressed and if the calculation was executed.
      cardsGrid.classList.remove("grid", "grid-cols-2", "grid-rows-2", "gap-5"); // Transform it into a single block grid.
    }
  };

  return (
    <div className="flex flex-col items-center max-w-[1200px] mx-auto gap-8 mb-10 sm:gap-12 md:gap-16 lg:flex-row lg:gap-6 lg:px-2">
      <div className="mx-4 flex flex-col lg:flex-1">
        <Header />
        <Text />
        <div className="w-full h-auto relative">
          {checker 
          ? <div className="absolute inset-0 bg-blue-50/50 z-10"></div> // When the result is calculated, this div prevents the user from recalculating without pressing the "RepeatBtn".
          : null
          }

            <FormBMI
              height={height}
              weight={weight}
              setHeight={setHeight}
              setWeight={setWeight}
            />
            <Button calculate={calculate} />
        </div>
      </div>
      <div className="cards-grid relative grid grid-cols-2 grid-rows-2 gap-4 w-[344px] h-[344px]
      sm:w-[600px] sm:h-[600px]
      md:w-[736px] md:h-[736px]
      lg:max-w-[440px] lg:h-[440px] lg:flex-1 lg:self-end lg:mt-12
      xl:max-w-[550px] xl:h-[550px]
      ">
        <RepeatBtn 
          checker= {checker}
          setChecker = {setChecker}
          className={                            // Check the calculation result and display only the corresponding card.
            checker && bmi !== undefined 
            ? "" 
            : "hidden"
          }
          cardsGrid = {cardsGrid}
          setHeight={setHeight}
          setWeight={setWeight}
        />
        <Card
          img={thumbsDown}
          title="Underweight"
          desc="BMI is between 0 and 18.5"
          bgColor="gray"
          bmi={bmi}
          checker={checker}
          className={
            checker && bmi !== undefined && bmi >= 18.5 
            ? "hidden" 
            : ""
          }
        />
        <Card
          img={thumbsUp}
          title="Normal"
          desc="BMI is between 18.5 and 24.9"
          bgColor="green"
          bmi={bmi}
          checker={checker}
          className={
            checker && bmi !== undefined && (bmi < 18.5 || bmi > 24.9)
              ? "hidden"
              : ""
          }
        />
        <Card
          img={thumbsDown}
          title="Overweight"
          desc="BMI is between 24.9 and 30"
          bgColor="yellow"
          bmi={bmi}
          checker={checker}
          className={
            checker && bmi !== undefined && (bmi <= 24.9 || bmi > 30)
              ? "hidden"
              : ""
          }
        />
        <Card
          img={thumbsDown}
          title="Obesity"
          desc="BMI is between 30 and 99"
          bgColor="red"
          bmi={bmi}
          checker={checker}
          className={checker && bmi !== undefined && bmi <= 30 
            ? "hidden" 
            : ""}
        />
      </div>
    </div>
  );
}

export default App;
