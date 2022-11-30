import React, { useState, useEffect } from "react";

const Notes = () => {
  const [notesDB, setNotesDb] = useState([]);
  useEffect(() => {
    const loadData = async () => {
      const response = await fetch("http://localhost:3001/notes");
      const json = await response.json();

      setNotesDb(json);
    };
    loadData();
  }, []);
  return (
    <div>
      <h1>All notes</h1>
      <ul>
        {notesDB.map((note) => (
          <li key={note.id}>
            {note.firstname} {note.lastname}, {note.phonenum}, {note.role}{" "}
            {note.message}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Notes;
