import React from "react";
import "./App.css";
import { Link, withRouter } from "react-router-dom";
import { netWorkService } from "./api";

function Note(props) {
  const id = props.match.params.id;
  const title = props.match.params.title;

  console.log(props);

  const EditTask = () => {
    return netWorkService({ url: `posts/${id}`, method: "DELETE" }).then(() =>
      props.history.push("/")
    );
  };

  const ChangeTasks = () => {
    return props.history.push(`/edit/${id}${title}`);
  };
  return (
    <div>
        <button onClick={ChangeTasks}>Изменить</button>
        <button onClick={EditTask}>Удалить</button>

      <h3>ID: {id}</h3>
      <h3>Note: {title}</h3>
    </div>
  );
}
export default withRouter(Note);
