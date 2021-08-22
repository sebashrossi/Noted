import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";

function Note(props) {
  function handleClick() {
    props.onDelete(props.id);
  }

  return (
    <div className="note">
      <div className="note-content">
        <h1>{props.title}</h1>
        <p>{props.content}</p>
      </div>
      <div className="delete-button">
        <button onClick={handleClick}>
          <DeleteIcon style={{ fill: "rgb(140,74,242)" }} />
        </button>
      </div>
    </div>
  );
}

export default Note;
