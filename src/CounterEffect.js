import { useEffect, useState } from "react";

function CounterEffect() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Effect re-ran because count changed:", count);
  }, [count]); // 👈 dependency

  return <button onClick={() => setCount(c => c + 1)}>Count: {count}</button>; 
     //React calls your updater function and injects current state into c.
    //c === latest count at update time (even with batching / async renders).
}
