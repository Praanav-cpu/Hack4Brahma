import { useEffect, useState } from "react";

function CountUp({ start = 0, end, prefix = "", suffix = "" }) {
  const [count, setCount] = useState(start);

  useEffect(() => {
    let step = Math.ceil((end - start) / 50);
    let interval = setInterval(() => {
      setCount((prev) => {
        if (prev >= end) {
          clearInterval(interval);
          return end;
        }
        return prev + step;
      });
    }, 50);
    return () => clearInterval(interval);
  }, [end, start]);

  return <span>{`${prefix}${count}${suffix}`}</span>;
}

export default CountUp;
