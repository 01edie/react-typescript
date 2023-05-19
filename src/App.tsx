import React from "react";

import "./App.css";
// import Parent from "./props/Parent";
// import GuestList from "./state/GuestList";
// import UserSearch from "./state/UserSearch";
// import SearchUser from "./classComponents/SearchUser";
import UserSearch from "./refs/UserSearch";



const users = [
  {name:'huron', age:30},
  {name:'lenka', age:30},
  {name:'alec', age:30},
]


function App() {
  return <div className="App">
    {/* <Parent/> */}
    {/* <GuestList /> */}
    {/* <UserSearch /> */}
    {/* <SearchUser users={users}/> */}
    <UserSearch />
  </div>;
}

export default App;
