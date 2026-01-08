import { useState } from "react";

function FilterItems() {
  const [users, setUsers] = useState([
    { id: 1, name: "Manish" },
    { id: 2, name: "Sita" },
  ]);

  const removeUser = (id) => {
    setUsers(prev =>
      prev.filter(user => user.id !== id) // 1️⃣ keep all except matching id
    );
  };

  return (
    <div>
      {users.map(user => (
        <UserCard
          key={user.id}
          user={user}
          onRemove={removeUser} // 2️⃣ pass handler down
        />
      ))}
    </div>
  );
}

function UserCard({ user, onRemove }) {
  return (
    <div>
      {user.name}
      <button onClick={() => onRemove(user.id)}>❌</button> {/* 3️⃣ trigger remove */}
    </div>
  );
}
export default FilterItems;
