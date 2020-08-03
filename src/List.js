import React from "react";
import "./App.css";
//import NoteContext from "./NoteContext";

function List(props) {
  console.log(props);

  const itemList = props.items;

//   const noteId = useContext(NoteContext)

//   const note = noteId.find(o => o.id === match.params.id)
  
    return itemList?.map((item)=> {
        return (
            <div className ="list-group-item" onClick={()=> props.onSelectItem(item.id, item.content)} key={item.id} >{item.content} </div>
        )
    })
  
}
export default List;
