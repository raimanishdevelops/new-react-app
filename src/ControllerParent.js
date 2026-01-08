//Move state from child → parent.

import { useEffect, useState } from "react";

function ControllerParent({name}) {
  const [value, setValue] = useState("");

  return (
    <>
      <Input value={value} setValue={setValue} />
      <InputSame value={value} />
      {console.log(name)}
    </>
  );
}

function Input({ value, setValue }) {
  return (
    <>
      
      <input
        type="text" // 2. Define input type
        value={value} // 3. Bind state to input
        onChange={(e) => setValue(e.target.value)} // 4. Update state on user typing
        placeholder="Enter text"
      />
      
    </>
  );
}

function InputSame({value}){
  

return (
  <>
  <p> {value} </p>
  <ControllerParent name="hame" />
  </>
  
);


}

export default ControllerParent ;
export {Input};
export {InputSame};