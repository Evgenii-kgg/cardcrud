import React, { useState, useEffect, useContext } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";

import List from "./List";

import { netWorkService } from "./api";
import NoteContext from './NoteContext';

function ListNote({match}) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [itemList, setItemList] = useState([]);
//   const [selectItem, setSelectItem] = useState(undefined);

  const getTasks = () => {
    return netWorkService({ url: "posts", method: "GET" }).then(
      (response) => {
        console.log("ответ", response);
        setIsLoaded(true);
        setItemList(response); // проверить
      }
    );
  };

  useEffect(() => {
    if (!isLoaded) {
      getTasks();
    }
  });

  const onSelectItem = (item) => {
    return 
  }

 const noteId = useContext(NoteContext)

  // const note = noteId.find(o => o.id === match.params.id)
  

  return (
    <div>
        <Link to="/posts/new">
        <button  >
            Создать пост
        </button>
        </Link>
        <h1>{`id №${match.params.id}`}</h1>

      <List
      onSelectItem={onSelectItem}
        items={itemList}
        isLoaded={isLoaded}
      />
    </div>
  );
}
export default ListNote;
