import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";

const Note = ({ title, content, onDelete, id }) => (
  <div className="note">
    <h1>{title}</h1>
    <p>{content}</p>
    <button
      onClick={() => {
        onDelete(id);
      }}
    >
      <DeleteIcon />
    </button>
  </div>
);

export default Note;
