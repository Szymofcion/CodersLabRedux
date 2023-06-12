import React, { Component, useState } from "react";
import { addUser } from "../redux/actions";
import { useDispatch } from "react-redux";
const UserInput = () => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  const onUserAdd = (user) => dispatch(addUser(user));
  return (
    <div>
      <input
        value={this.state.value}
        onChange={(e) => setValue(e.target.value)}
        type="text"
      />
      <button onClick={() => onUserAdd(value)}>Dodaj użytkownika</button>
    </div>
  );
};

export default UserInput;
