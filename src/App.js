import React from "react";
import ReactDOM from "react-dom";
import { useState } from "react";
import AddUsers from "./components/User/AddUsers";
import Card from "./components/UI/Card";
import UsersList from "./components/User/UsersList";
function App() {
  const [usersList, SetusersList] = useState([]);
  const AdduserHandler = (uName, uAge) => {
    SetusersList((prevusersList) => {
      return [
        ...prevusersList,
        { name: uName, age: uAge, id: Math.random().toString },
      ];
    });
  };
  return (
    <div>
      <AddUsers onAddUser={AdduserHandler} />
      <UsersList users={usersList} />
    </div>
  );
}

export default App;
