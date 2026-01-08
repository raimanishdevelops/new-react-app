import { useEffect, useState } from "react";

function ReplaceIndexKey() {
  const [users, setUsers] = useState([]); // 1. state to store API data

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users") // 2. fetch data
      .then(res => res.json())                          // 3. parse JSON
      .then(data => setUsers(data));                    // 4. store in state
  }, []);                                               // 5. run once on mount

  return (
    <div>
      {users.map(user => (
        <div key={user.id}>   // 6. key helps React track THIS row
          {user.name}         // 7. UI render only
        </div>
      ))}
    </div>
  );
}
export default ReplaceIndexKey;