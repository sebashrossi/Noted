import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";

function Note(props) {
  function handleClick() {
    props.onDelete(props.id);
  }

  return (
    <div className="note">
      <div>
        <h1>{props.title}</h1>
        <p>{props.content}</p>
      </div>
      <div className="delete-button">
        <button onClick={handleClick}>
          <DeleteIcon style={{ color: "#4aDEDE" }} />
        </button>
      </div>
    </div>
  );
}

export default Note;