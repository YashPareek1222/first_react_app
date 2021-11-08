import React from "react";
import ReactDOM from "react-dom";
import { useState } from "react";
import Card from "../UI/Card";
import classes from "./AddUsers.module.css";
import ErrorModal from "../UI/ErrorModal";
const AddUsers = (props) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [error, Seterror] = useState("");
  const adduserHandler = (event) => {
    event.preventDefault();

    if (name.trim().length === 0 || age.trim().length === 0) {
      Seterror({
        title: "Invalid input",
        message: "Please Enter valid details!!",
      });
      return;
    }
    if (+age < 1) {
      Seterror({
        title: "Invalid Age",
        message: "Please Enter valid age!!",
      });
      return;
    }
    props.onAddUser(name, age);
    setName("");
    setAge("");
  };

  const errorHandler = () => {
    Seterror(null);
  };
  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={adduserHandler}>
          <label>
            Username:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label>
            Age(Years):
            <input
              type="number"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </label>
          <input type="submit" value="Add User" />
        </form>
      </Card>
    </div>
  );
};

export default AddUsers;
