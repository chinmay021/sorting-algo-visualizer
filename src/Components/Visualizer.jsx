import { useEffect, useState } from "react";
import Bars from "./Bars";
import Buttons from "./Buttons";
import { createBars } from "../utils/utils";
import { SIZE } from "../utils/constants";
import { SPEED } from "../utils/constants";

function Visualizer() {
  const [size, setSize] = useState(SIZE); // [state, setState
  const [bars, setBars] = useState(() => createBars(size));
  const [speed, setSpeed] = useState(SPEED);
  

  useEffect(() => {
    setBars(createBars(size));
  }, [size]);

  return (
    <div className="h-4/5">
      <Buttons
        bars={bars}
        setBars={setBars}
        setSize={setSize}
        size={size}
        speed={speed}
        setSpeed={setSpeed}
      />
      <Bars bars={bars} />
    </div>
  );
}

export default Visualizer;
