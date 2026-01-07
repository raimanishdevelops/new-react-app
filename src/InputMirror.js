import React, { useState } from 'react'; // very important part remember this 

function InputMirror() {
  const [text, setText] = useState('');
  return (
    <>
      <input onChange={(e) => setText(e.target.value)} />
      <p>You typed: {text}</p>
    </>
  );
}
export {InputMirror};