import { useRef, useState } from "react";
import {
  bubbleSort,
  createBars,
  insertionSort,
  mergeSort,
  quickSort,
  selectionSort,
  shellSort,
} from "../utils/utils";

function Buttons({
  bars,
  setBars,
  size,
  setSize,
  speed,
  setSpeed,
}) {
  const [disable, setDisable] = useState(false);
  const active = useRef(true);

  function generateArray() {
    setBars(createBars(size));
  }

  function animateSwaps(swaps, bars) {
    if (!active.current) {
      console.log("stopped");
      setBars(createBars(size));
      active.current = true;
      setDisable(false);
      return;
    }
    if (swaps.length === 0) {
      bars.forEach((bar) => {
        bar[1] = false;
        bar[2] = true;
      });
      setBars([...bars]);
      setDisable(false);
      active.current = true;
      return;
    }
    bars.forEach((bar) => {
      bar[1] = false; // make all bars not selected
    });
    const [i, j] = swaps.shift();
    [bars[i], bars[j]] = [bars[j], bars[i]];
    bars[i][1] = true;
    bars[j][1] = true;
    setBars([...bars]);
    setTimeout(() => {
      animateSwaps(swaps, bars);
    }, speed);
  }

  function handleBubbleSort() {
    setDisable(true);
    const copy = bars.map((bar) => {
      return bar[0];
    });
    const swaps = bubbleSort(copy);
    // console.log(sortedArray)
    animateSwaps(swaps, bars);

    // setBars([...sortedArray]);
  }

  function handleMergeSort() {
    const copy = bars.map((bar) => {
      return bar[0];
    });
    const swaps = mergeSort(copy);
    animateSwaps(swaps, bars);
  }

  function handleInsertionSort() {
    setDisable(true);
    const copy = bars.map((bar) => {
      return bar[0];
    });
    const swaps = insertionSort(copy);
    // console.log(sortedArray);
    animateSwaps(swaps, bars);
  }

  function handleSelectionSort() {
    setDisable(true);
    const copy = bars.map((bar) => {
      return bar[0];
    });
    const swaps = selectionSort(copy);
    animateSwaps(swaps, bars);
  }

  function handleShellSort() {
    setDisable(true);
    const copy = bars.map((bar) => {
      return bar[0];
    });
    const swaps = shellSort(copy);
    animateSwaps(swaps, bars);
  }
  function handleQuickSort() {
    setDisable(true);
    const copy = bars.map((bar) => {
      return bar[0];
    });
    const swaps = quickSort(copy);
    animateSwaps(swaps, bars);
  }

  return (
    <form
      className="flex flex-row text-white gap-1 mt-1 pl-2 bg-green-100 font-medium"
      onSubmit={(event) => {
        event.preventDefault();
      }}
    >
      <button
        className="bg-slate-800 border p-2 border-black active:bg-blue-600 disabled:bg-black/75"
        onClick={generateArray}
        disabled={disable}
      >
        Generate New Array
      </button>
      <button
        className="bg-slate-800 border p-2 border-black focus:bg-blue-600 disabled:bg-black/75"
        onClick={handleInsertionSort}
        disabled={disable}
      >
        Insertion Sort
      </button>
      <button
        className="bg-slate-800 border p-2 border-black  focus:bg-blue-600 disabled:bg-black/75 "
        onClick={handleSelectionSort}
        disabled={disable}
      >
        Selection Sort
      </button>
      <button
        className="bg-slate-800 border p-2 border-black focus:bg-blue-600 disabled:bg-black/75"
        onClick={handleBubbleSort}
        disabled={disable}
      >
        Bubble Sort
      </button>
      <button
        className="bg-slate-800 border p-2 border-black focus:bg-blue-600 disabled:bg-black/75"
        onClick={handleQuickSort}
        disabled={disable}
      >
        Quick Sort
      </button>
      {/* TODO: MergeSort incomplete */}
      {/* <button
        className="bg-slate-800 border p-2 border-black focus:bg-blue-600"
        onClick={handleMergeSort}
      >
        Merge Sort
      </button> */}
      <button
        className="bg-slate-800 border p-2 border-black focus:bg-blue-600 disabled:bg-black/75"
        onClick={handleShellSort}
        disabled={disable}
      >
        Shell Sort
      </button>
      <label
        htmlFor="sizeSlider"
        className="bg-slate-800 border p-2 border-black"
      >
        Change size
      </label>
      <input
        type="range"
        min={10}
        max={40}
        value={size}
        onChange={(event) => {
          setSize(event.target.value);
          console.log(size, event.target.value);
        }}
        className="slider"
        id="sizeSlider"
        disabled={disable}
      ></input>
      <label
        htmlFor="speedSlider"
        className="bg-slate-800 border p-2 border-black "
      >
        Change speed
      </label>
      <input
        type="range"
        min="20"
        max="490"
        value={500 - speed}
        onChange={(event) => {
          console.log(500 - event.target.value);
          setSpeed(500 - event.target.value);
        }}
        className="slider "
        id="speedSlider"
        disabled={disable}
      ></input>

      <button
        className="bg-slate-800 border p-2 border-black focus:bg-blue-600"
        onClick={() => {
          active.current = false;
          console.log(active);
        }}
      >
        stop ❌
      </button>
    </form>
  );
}

export default Buttons;
