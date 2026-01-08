//Render a list of names from an array.

import { useEffect, useState } from "react";

function RenderList() {
  const [users, updateUsers] = useState([]);

  const Users = [
    { id: 1, name: "Manish" }, // 1. User with id 1 and name Manish
    { id: 2, name: "Sita" }, // 2. User with id 2 and name Sita
    { id: 3, name: "Ram" }, // 3. User with id 3 and name Ram
  ];

  useEffect(() =>updateUsers(Users) , []);

   return (
    <div>
      {users.map((user) => (
        <UserCard key={user.id} user={user} /> // 6. Render UserCard for each user
      ))}
    </div>
  );
}
function UserCard({ user }) {
  return <div>{user.name}</div>; // Displays the user's name
}


//   {
//     users.map((user) => <UserCard key={user.id} user={user} />);
//   }
  

export {RenderList};
export {UserCard};