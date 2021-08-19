import React, { useState, useEffect } from "react";
import Note from "./Note";
import CreateArea from "./CreateArea";
import Toggle from "./Toggle"

function Main() {
  const [notes, setNotes] = useState([]);


  useEffect(() => {
    fetch("http://localhost:3000/notes")
      .then((res) => res.json())
      .then((data) => setNotes(data));
  }, [])

  function addNote(newNote) {
    const options = {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ note: newNote})
    }
    fetch("http://localhost:3000/notes", options)
    .then(res => {
      if (res.status === 200) {
        return res.json()
      } else {
        throw res;
      }})
    .then(data => {
      setNotes((prevNotes) => {
        return [...prevNotes, data];
      });
    })
    .catch(res => {
      res.json().then(err => console.log(err))
    })
  }

  function deleteNote(id) {
    fetch(`http://localhost:3000/notes/${id}`, {method: 'DELETE'})
    setNotes((prevNotes) => {
      return prevNotes.filter((noteItem) => {
        return noteItem.id !== id;
      });
    });
   };
   


  return (
    <div className="main-div">
    <Toggle />
      <div className="note-section">
        <div>
        <CreateArea onAdd={addNote} />
        </div>
        <div className="notes-index">
          {notes.map((noteItem, index) => {
            return (
              <Note
                key={index}
                id={noteItem.id}
                title={noteItem.title}
                content={noteItem.content}
                onDelete={deleteNote}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Main;
