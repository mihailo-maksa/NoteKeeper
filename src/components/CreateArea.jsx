import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";

const CreateArea = ({ addNote }) => {
  const [fullNote, setFullNote] = useState({
    title: "",
    content: ""
  });

  const handleChange = event => {
    const { name, value } = event.target;
    setFullNote({ ...fullNote, [name]: value });
  };

  const handleSubmit = event => {
    event.preventDefault();
    setFullNote({
      title: "",
      content: ""
    });
  };

  const [isClicked, setIsClicked] = useState(false);

  const toggle = () => setIsClicked(true);

  return (
    <div>
      <form className="create-note" onSubmit={handleSubmit}>
        {isClicked ? (
          <input
            type="text"
            name="title"
            placeholder="Title"
            onChange={handleChange}
            value={fullNote.noteTitle}
            spellCheck="false"
            autoComplete="off"
          />
        ) : null}
        <textarea
          type="text"
          name="content"
          placeholder="Take a note..."
          rows={isClicked ? 3 : 1}
          onClick={toggle}
          onChange={handleChange}
          value={fullNote.noteContent}
          spellCheck="false"
          autoComplete="off"
        />
        <Zoom in={isClicked}>
          <Fab onClick={() => addNote(fullNote)}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
};

export default CreateArea;
