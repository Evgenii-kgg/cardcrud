import React, { useState, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import "./App.css";

import List from "./List";

import { netWorkService } from "./api";
// import NoteContext from './NoteContext';

function ListNote(props) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [itemList, setItemList] = useState([]);

  const getTasks = () => {
    return netWorkService({ url: "posts", method: "GET" }).then((response) => {
      console.log("ответ", response);
      setIsLoaded(true);
      setItemList(response);
    });
  };

  useEffect(() => {
    if (!isLoaded) {
      getTasks();
    }
  });

  console.log(props);

  const onSelectItem = (item, title) => {
    props.history.push(`/posts/${item}${title}`);
  };

  return (
    <div>
      <Link to="/posts/new">
        <button>Создать пост</button>
      </Link>
      <div className="card" style={{marginLeft: "300px", marginRight: "300px"}}>
      <div className="list-group list-group-flush">
      <List onSelectItem={onSelectItem} items={itemList} isLoaded={isLoaded} />
      </div>
      </div>
    </div>
  );
}
export default withRouter(ListNote);
