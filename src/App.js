import React, { useState } from "react";

import FormNewUser from "./components/NewUser/FormNewUser";
import ListUsers from "./components/Users/ListUsers";

import "./App.css";

const App = () => {
  const [user, setUser] = useState("");

  const addUserHandler = (userToAdd) => {
    setUser((prevUsers) => {
      return [userToAdd, ...prevUsers];
    });
  };

  let content = (
    <p style={{ textAlign: "center" }}>No users found. Maybe add one?</p>
  );

  if (user.length > 0) {
    content = <ListUsers users={user}></ListUsers>;
  }

  return (
    <div>
      <section id="goal-form">
        <FormNewUser addUser={addUserHandler} />
      </section>
      <section id="goals">{content}</section>
    </div>
  );
};

export default App;
