import React, { useState, useEffect } from "react";
import "./App.css";
import NoteContext from './NoteContext'

export default function NoteProvider(props) {
  const [NoteId, setNoteId] = useState(0);
  return (
    <NoteContext.Provider value={NoteId}>{props.children}</NoteContext.Provider>
  );
}
