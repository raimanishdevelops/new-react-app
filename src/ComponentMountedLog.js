import { useEffect } from "react";

function ComponentMountedLog() {
  useEffect(() => {
    console.log("Component mounted");
  }, []); // empty deps = run once after first render

  return <div>Check console</div>;
}

export default ComponentMountedLog;