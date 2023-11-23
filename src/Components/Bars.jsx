function Bars({ bars }) {
  // const bars = useMemo(() => createBars(40), []);
  // console.log(bars);

  return (
    <div className="pt-20">
      <div className="h-full w-full pl-6 flex justify-start items-end ">
        {bars.map((bar, index) => {
          return (
            <div key={index}>
              <div
                className={`w-4 m-1 border border-blue-600 ${
                  bar[1] ? "bg-red-600" : "bg-indigo-600"
                }}`}
                style={{
                  height: `${bar[0] * 2}px`,
                  background: `${bar[2]? "#5ee55e" : bar[1] ? " #ee3333" : "rgb(167 139 250)"}`,
                }}
              ></div>
              <span className="m-1 text-blue-600 font-semibold">{bar}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Bars;
