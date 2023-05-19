import React, { useState } from "react";

const users = [
    {name:'huron', age:30},
    {name:'lenka', age:30},
    {name:'alec', age:30},
]
 
const UserSearch: React.FC = () => {
  const [name, setName] = useState("");
  const [user, setUser]= useState<undefined | {name: string; age : number}>()
  const search = (): void => {
    setUser(users.find(e=>e.name===name))
  };
  return (
    <div>
      UserSearch
      <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <div>
      <button onClick={search}>Search</button>
      </div>
      </div>
      <div>{user?.name ?? 'No results found'}</div>
      <div>{user?.age}</div>
    </div>
  );
};

export default UserSearch