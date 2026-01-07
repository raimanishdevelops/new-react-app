import { useState } from "react";

function LoginStatus() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <>
      <p>{isLoggedIn ? "Logged In" : "Logged Out"}</p>
      <button onClick={() => setIsLoggedIn(!isLoggedIn)}>Toggle Login</button>
    </>
  );
}
export {LoginStatus};

// CONTROL FLOW ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

// [User Clicks Button]
//           ↓
// onClick event fires
//           ↓
// () => setIsLoggedIn(!isLoggedIn)
//           ↓
// React schedules state update (not immediate)
//           ↓
// React re-renders LoginStatus()
//           ↓
// useState gives NEW isLoggedIn value
//           ↓
// JSX re-evaluates:
// {isLoggedIn ? "Logged In" : "Logged Out"}
//           ↓
// DOM updates (text changes)
