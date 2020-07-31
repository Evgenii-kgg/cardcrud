import React, { useState, useEffect } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import { netWorkService } from "./api";

function Note(props) {
  const [redirect, setRedirect] = useState(false);

  const id = props.match.params.id;
  console.log(id);

  const EditTask = () => {
    return netWorkService({ url: `posts/${id}`, method: "DELETE" }).then(() => {
      setRedirect({ redirect: true });
    });
  };

  const ChangeTasks = () => {};

  // if (redirect) {
  //   return <Redirect to="/" />;
  // }

  return (
    <div>
      <Link to="/">
        <button onClick={ChangeTasks}>Изменить</button>
      </Link>
      <Link to="/">
        <button onClick={EditTask}>Удалить</button>
      </Link>

      <h3>ID: {id}</h3>
    </div>
  );
}
export default Note;
